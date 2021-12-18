const express = require('express');
const userController = require('./controllers/userController');
const transactionController = require('./controllers/transactionController');
const shareController = require('./controllers/shareController');
const app = express();
require('./dbContext/mongo');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Happy coding!')
})

app.use('/users', userController);
app.use('/transactions', transactionController);
app.use('/shares', shareController);

app.listen(3000, () => {
    console.log('server running at port 3000');
});