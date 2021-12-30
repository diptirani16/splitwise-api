const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    fullname: { type: String, required: true },
    emailId: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
})

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;