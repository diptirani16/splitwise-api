const express = require('express');
const userController = require('./controllers/userController');
const transactionController = require('./controllers/transactionController');
const shareController = require('./controllers/shareController');
const passwordController = require('./controllers/passwordController');
const app = express();
const cors = require('cors');
require('./dbContext/mongo');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Happy coding!')
})

// app.post('/login', async (req, res) => {
//     const user = req.body;
//     const hashed = await hashPassword(user.password)
//     res.status(200).send(hashed)
// })

// app.post('/verify', async (req, res) => {
//     const user = req.body
//     const status = await verifyPassword(user.password, user.hash)
//     res.status(200).send(status)
// })

app.use('/users', userController);
app.use('/transactions', transactionController);
app.use('/shares', shareController);
app.use('/passwords', passwordController);

app.listen(3002, () => {
    console.log('server running at port 3002');
});