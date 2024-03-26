const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');

// mongoose.connect("mongodb+srv://veereshak06:fXX3zuM5o1rULiG4@event-management-db.qvo7qwu.mongodb.net/?retryWrites=true&w=majority&appName=event-management-db")
mongoose.connect("mongodb+srv://veereshak06:fXX3zuM5o1rULiG4@event-management-db.qvo7qwu.mongodb.net/?retryWrites=true&w=majority&appName=event-management-db")
const UserModule = require('./model/UserModel');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req,res)=> {
    console.log('first', req.body)
    UserModule.create(req.body)
    .then((users)=> res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req,res)=> {
    const {email, password} = req.body
    console.log('dknckdncd', email)
    UserModule.findOne({email: email})
    .then((user) => {
        console.log('useruser', user)
        if(user){
            if(user.password === password){
                res.json({ status: 'success', userData: user })
            }
            else{
                res.json({ status: 'error', message: 'Password is incorrect' })
            }
        }
        else{
            res.json({ status: 'error', message: 'No record exists' })
        }
    })
    .catch(err => res.json(err))
});


http.listen(3004, function() {
    console.log('server is runninggggg');
})