const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Happy coding!');
})

router.get('/:id', (req, res) => {
    res.status(200).send(`Happy coding: ${req.params.id}`);
})

router.post('/', (req, res) => {
    res.status(201).send(req.body);
})

router.put('/:id', (req, res) => {
    res.status(200).send(req.body);
})

router.delete('/:id', (req, res) => {
    res.status(200).send(req.params.id);
})

module.exports = router;