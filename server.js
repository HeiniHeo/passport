const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const passportConfig = require('./passport/index');
const app = express();

app.use((req,res,next)=>{
    req.eez = 'At'
    req.heini = 'heini';
    next();
})

passportConfig();

app.use(session({
    secret : 'the', 
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    console.log(req.session)
    res.send(`hello world ${req.heini} & ${req.eez}`)
})

app.get('/user',(req,res)=>{
    res.send(`hello world ${req.heini} & ${req.eez}`)
})

app.get('/board',(req,res)=>{
    res.send(`hello world ${req.heini} & ${req.eez}`)
})

app.listen(3000,()=>{
    console.log('open')
})