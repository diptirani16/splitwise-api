const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String }
})

const passwordModel = mongoose.model('passwordModel', passwordSchema);

module.exports = passwordModel;