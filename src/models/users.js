const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    fullname: { type: String },
    emailId: { type: String },
    phoneNumber: { type: Number },
    dateOfBirth: { type: Date },
})

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;