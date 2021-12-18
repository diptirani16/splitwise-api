const { Router } = require('express');
const router = Router();

const shareModel = require('../models/shares');

router.get('/', async (req, res) => {
    const shares = await shareModel.find().exec();
    res.status(200).send(shares);
})

router.get('/:id', async (req, res) => {
    const share = await shareModel.findById(req.params.id);
    res.status(200).send(share);
})

router.post('/', async (req, res) => {
    const share = await shareModel.create(req.body);
    res.status(201).send(share);
})

router.put('/:id', async (req, res) => {
    const share = await shareModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(share);
})

router.delete('/:id', async (req, res) => {
    const share = await shareModel.findByIdAndDelete(req.params.id);
    res.status(200).send(share);
})

module.exports = router;