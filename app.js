const express = require('express');
const app = express();
const mongoose = require('mongoose');

const authRouter = require('./routers/authRouter')
const itemRouter = require('./routers/itemRouter');

app.use(express.json());

app.use('/auth', authRouter);
app.use('/items', itemRouter);

mongoose.connect('mongodb://localhost:27017/apnastore', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {console.log('MongoDB connected')})
    .catch(err => {console.log(err)})

app.listen(5000, () => console.log(`Server started at port 5000`));
