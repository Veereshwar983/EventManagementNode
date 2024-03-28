// /* eslint-disable guard-for-in */

// const mongoose = require('mongoose');
// const MONGO_DISCONNECTED = 0;
// const MONGO_CONNECTED = 1;

// const mongoConnectionString = 'mongodb+srv://veereshak06:fXX3zuM5o1rULiG4@event-management-db.qvo7qwu.mongodb.net/?retryWrites=true&w=majority&appName=event-management-db';

// const parsedUrl = new URL(mongoConnectionString);

// // Extract the database connection details
// const databaseName = parsedUrl.pathname.replace(/^\//, '');
// const userName = parsedUrl.username;
// const password = parsedUrl.password;
// const host = parsedUrl.hostname;
// const port = parsedUrl.port || '27017'; // Default MongoDB port is 27017
// const scheme = parsedUrl.protocol.replace(/:$/, '');

// export const connect = async (ignoreCredentials = false, done) => {
//     let URL = `${scheme}://${userName}:${password}@${host}:${port}/${databaseName}`;
//     if (ignoreCredentials) {
//         URL = `${scheme}://${host}:${port}/${databaseName}`;
//     }
//     if (mongoose.connection.readyState === MONGO_DISCONNECTED) {
//         await mongoose.connect(URL, { useNewUrlParser: true });
//         if (done !== undefined) {
//             done();
//         }
//     }
//     return true;
// };

// // eslint-disable-next-line max-len
// export const get = () => {
//     connect();
//     return mongoose;
// };

// export const disconnect = async (done) => {
//     if (mongoose.connection.readyState == MONGO_CONNECTED) {
//         await mongoose.disconnect();
//         if (done !== undefined) {
//             return done();
//         }
//     } else {
//         if (done !== undefined) {
//             return done(false);
//         }
//     }
// };

// export const clearAllCollections = async () => {
//     connect();
//     for (const i in mongoose.connection.collections) {
//         await mongoose.connection.collections[i].deleteMany({});
//     }
// };
