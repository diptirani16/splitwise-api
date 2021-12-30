const { Router } = require('express');
const router = Router();

const passwordModel = require('../models/passwords');
const { hashPassword, verifyPassword } = require('../utils/password');

// router.get('/', async (req, res) => {
//     const passwords = await passwordModel.find().exec();
//     res.status(200).send(passwords);
// })

// router.get('/:username', async (req, res) => {
//     if(await passwordModel.exists({ "username": req.params.username })) {
//         const passwords = await passwordModel.find({"username": req.params.username}).exec();
//         res.status(200).send(passwords);
//     }
//     else {
//         res.status(400).send('invalid username');
//     }
// })

router.post('/', async (req, res) => {
    const details = req.body;
    if(await passwordModel.exists({ "username": details.username })) {
        res.status(400).send('username already exists');
    }
    else {
        const hashed = await hashPassword(details.password);
        const user = await passwordModel.create({"username": details.username, "password": hashed});
        res.status(200).send('user created');
    }
})

// router.put('/:username', async (req, res) => {
//     const details = req.body;
//     if(await passwordModel.exists({ "username": details.username })) {
//         const hashed = await hashPassword(details.password);
//         const user = await passwordModel.findOneAndUpdate({"username": details.username, "password": hashed});
//         res.status(200).send('user created');
//     }
//     else {
//         res.status(400).send('invalid username');
//     }
// })

// router.delete('/:username', async (req, res) => {
//     if(await passwordModel.exists({ "username": req.params.username })) {
//         const password = await passwordModel.findOneAndDelete({"username": req.params.username});
//         res.status(200).send(password);
//     }
//     else {
//         res.status(400).send('invalid username');
//     }
// })

module.exports = router;