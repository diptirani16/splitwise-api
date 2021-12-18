const { Router } = require('express');
const router = Router();

const transactionModel = require('../models/transactions');

router.get('/', async (req, res) => {
    const transactions = await transactionModel.find().exec();
    res.status(200).send(transactions);
})

router.get('/:id', async (req, res) => {
    const transaction = await transactionModel.findById(req.params.id).exec();
    res.status(200).send(transaction);
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const transaction = await transactionModel.create(req.body);
    res.status(201).send(transaction);
})

router.put('/:id', async (req, res) => {
    const transaction = await transactionModel.findByIdAndUpdate(req.params.id ,req.body);
    res.status(200).send(transaction);
})

router.delete('/:id', async (req, res) => {
    const transaction = await transactionModel.findByIdAndDelete(req.params.id);
    res.status(200).send(transaction);
})

module.exports = router;