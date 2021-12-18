const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
    username: { type: String },
    amount: { type: Number },
    transactionId: { type: mongoose.Schema.Types.ObjectId },
    payee: { type: String },
})

const shareModel = mongoose.model('shareModel', shareSchema);

module.exports = shareModel;