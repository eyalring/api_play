const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use('/posts' , (req,res) => {
    console.log(' we are running a middleware here')
})


mongoose.connect('');


app.get('/' , (req,res) => {
    res.send('we are at home')
})

app.get('/posts' , (req,res) => {
    res.send('we are at posts')
})

app.listen(3000);
