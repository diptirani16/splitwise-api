const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    username: { type: String },
    totalAmount: { type: Number },
    payee: { type: String },
    category: { type: String },
    notes: { type: String },
    date: { type: Date },
    shares: [{
        username: { type: String },
        amount: { type: Number }
    }]
})

const transactionModel = mongoose.model('transactionModel', transactionSchema);

module.exports = transactionModel;