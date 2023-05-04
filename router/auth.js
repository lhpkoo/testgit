const express = require('express');
const routes = express.Router();

routes.get('/login',(req,res)=>{
    res.send('login')
});

routes.get('/register',(req,res)=>{
    res.send('register')
})

module.exports = routes