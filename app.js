const app = require("express")();
const http = require("http").Server(app);

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment");
const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "veereshak06@gmail.com",
      pass: "xeud zqlg yiyo rlcr",
    },
  });

  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: '"You" <***-example-person@gmail.com>',
    to: "veereshak06@gmail.com",
    subject: "Event Registration",
    html: `
    <h1>Hi</h1>
    <p>you have successfully register the event</p>
    `,
  });
  console.log(info.messageId);
}

mongoose.connect(
  "mongodb+srv://veereshak06:fXX3zuM5o1rULiG4@event-management-db.qvo7qwu.mongodb.net/?retryWrites=true&w=majority&appName=event-management-db"
);

const UserModule = require("./model/UserModel");
const EventModel = require("./model/EventModel");
const EventRegistrationModel = require("./model/EventRegistrationModel");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  console.log("first", req.body);
  UserModule.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("dknckdncd", email);
  UserModule.findOne({ email: email })
    .then((user) => {
      console.log("useruser", user);
      if (user) {
        if (user.password === password) {
          res.json({ status: "success", userData: user });
        } else {
          res.json({ status: "error", message: "Password is incorrect" });
        }
      } else {
        res.json({ status: "error", message: "No record exists" });
      }
    })
    .catch((err) => res.json(err));
});

app.post("/events", (req, res) => {
  console.log("second", req.body);
  EventModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/events", async (req, res) => {
  try {
    const organizerId = req.query.organizerId;
    let events = [];
    if (organizerId) {
      events = await EventModel.find({ organizer: organizerId });
    } else {
      events = await EventModel.find();
    }

    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/eventRegistration", (req, res) => {
  console.log("hdbchdhcdc", req.body);
  EventRegistrationModel.create(req.body)
    .then(async (event) => {
      main();
      console.log("evneettete", event);
      await EventModel.findByIdAndUpdate(
        event.eventId,
        { $push: { attendees: event.userId } },
        { new: true }
      );
      res.json(event);
    })
    .catch((err) => res.json(err));
});

app.get('/events/search', async (req, res) => {
  try {
    const { query } = req.query;
    const events = await EventModel.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
      ]
    });
    res.json(events);
  } catch (err) {
    res.status(500).send(err);
  }
});

http.listen(3005, function () {
  console.log("server is runninggggg");
});
