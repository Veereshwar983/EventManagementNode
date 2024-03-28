// import { db } from "..";
const USER_MODEL = "User";
// const dbConnection = db.get();
// const UserSchema = new dbConnection.Schema({
//   email: dbConnection.Schema.Types.String,
//   password: dbConnection.Schema.Types.String,
//   role: dbConnection.Schema.Types.String,
// });

const UserSchema = new dbConnection.Schema({
  email: String,
  password: String,
  role: String,
});

UserSchema.statics.userRegister = async function (userObj) {
  return await this.model(USER_MODEL).create(userObj);
};

export default dbConnection.model(USER_MODEL, UserSchema);
