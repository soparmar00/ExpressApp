const express = require('express')
const bcrypt = require("bcrypt");
const LoginModel = require('../Model/LoginModel')
const jwt = require("jsonwebtoken");

const routes = express.Router();

routes.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new LoginModel({
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
            password: hash
        });

        LoginModel.findOne({ email: req.body.email }).then(user1 => {
            if (user1) {
                return res.status(401).json({
                    message: "User Already Exist"
                })
            }

            user.save().then(result => {
                if (!result) {
                    return res.status(500).json({
                        message: "Error Creating USer"
                    })
                }
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
        })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });;
    })

});

 routes.post('/login', (req, res, next) => {
    let fetchUser;
  
    LoginModel.findOne({email:req.body.email}).then(user=>{
      if(!user){
        return res.status(401).json({
          message: "Auth failed no such user"
        })
      }
      fetchUser=user;
      return bcrypt.compare(req.body.password, user.password);
    }).then(result=>{
      console.log(fetchUser)
      if(!result){
        return res.status(401).json({
          message: "Auth failed inccorect password"
        })
      }
      const token = jwt.sign(
        { email: fetchUser.email, userId: fetchUser._id },
        "sourabhs_secret",
        { expiresIn: "1m" }
      );
      console.log(token)
      res.status(200).json({
        token: token,
        _id:fetchUser._id,
      });
    })
    .catch(e=>{
     
      console.log(e)
    
    })
  })


module.exports = routes;