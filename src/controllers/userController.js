const { Router } = require('express');
const router = Router();

const userModel = require('../models/users');

router.get('/', async (req, res) => {
    const users = await userModel.find().exec();
    res.status(200).send(users);
})

router.get('/:id', async (req, res) => {
    const users = await userModel.findById(req.params.id).exec();
    res.status(200).send(users);
})

router.post('/', async (req, res) => {
    const user = await userModel.create(req.body);
    res.status(201).send(user);
})

router.put('/:id', async (req, res) => {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(user);
})

router.delete('/:id', async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
})

module.exports = router;