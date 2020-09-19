var express = require('express')
var jwt = require ('jsonwebtoken')
var passport = require ('passport')

var router = express.Router()

/* Post /login */
router.post("/login", (req,res)=>{
    passport.authenticate("local", {session:false},
    (error,user,info)=>{
        if (error || !user){
            return res.status(400).json({
                message: info ? info.message : "login failed",
                user: user,
            })
        }

        var token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
        return res.json({user:user, token:token})
    })(req,res)
})

module.exports =  router