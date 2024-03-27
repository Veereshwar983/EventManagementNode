const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const EventRegistrationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    userId: ObjectId,
    eventId: ObjectId

})

module.exports = mongoose.model('EventRegistration', EventRegistrationSchema)