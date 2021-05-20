/* HTML에서 POST 로 아이디와 패스워드 받았을때 처리하는 로직 || 전략 */ 

const LocalStrategy= require('passport-local').Strategy
const passport = require('passport');

console.log(LocalStrategy);

module.exports = ()=>{
                // 인자값 2개 첫번째 == 객체 & 두번째 == 함수
    passport.use(new LocalStrategy({
        //첫번째 인자값 == 객체
        usernameField:'userid',
        passwordField:'userpw'
    },(uid,upw,callback)=>{
        //여기가 두번쩨 인자값 == 함수 => 값을 처리하는 부분의 로직
        //인자값 3개. 첫번째 == 아이디value || 두번째 == pw value || 세번째 마지막 실행할 콜백함수명
        
        /*
        DB connection & search
        >> 조회 성공시 == callback(null,{Object})
        >> 조회 실패시 == callback(null,false)
        */

        let user= {
            userid:uid,
            userpw:upw
        }

        callback(null,user);
    }))
}