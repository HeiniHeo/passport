const passport = require('passport');
const local = require('./LocalStrategy');

module.exports = ()=>{
    passport.serializeUser((user,cb)=>{
        cb(null,user.userid);
    })
    passport.deserializeUser((userid,cb)=>{
        cb(null,userid)
    })
    local();
}