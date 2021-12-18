const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    totalAmount: { type: Number },
    payee: { type: String },
    category: { type: String },
    notes: { type: String },
    shares: [{
        username: { type: String },
        amount: { type: Number }
    }]
})

const transactionModel = mongoose.model('transactionModel', transactionSchema);

module.exports = transactionModel;