const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postrout = require('./routes/posts.js')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.use('/posts' ,postrout);


mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser :true},()=> {
    console.log('connected to DB!')

});


app.get('/' , (req,res) => {
    res.send('we are at home')
})

app.get('/posts' , (req,res) => {
    res.send('we are at posts')
})

app.listen(3000);
