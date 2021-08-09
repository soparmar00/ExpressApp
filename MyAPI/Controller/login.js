const mongoose = require('mongoose')
const express = require('express')

const LoginModel = require('../Model/LoginModel')
const bcrypt = require('bcrypt');   
const jwt = require("jsonwebtoken");



const getLoginUser = async (req, res) => { 
    try {
        const myUser = await LoginModel.find();
                
        res.status(200).json(myUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createUser = async (req, res, next) => {
    const { name, email, city, password } = req.body;

    
    bcrypt.hash(password, 55, function(err, hash) {
        if(err){
            return res.json({
                message: "Error"
            })
        }
        else{
            try {
     const myUser =  new LoginModel({ 
         name: name,
         email: email,
         city: city,
         password: hash
         })

        myUser.save();

        res.status(201).json(myUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    }
    
    });

    
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    LoginModel.find({email: email})
    .exec()
    .then(user=> {
        if(user.length<1){
            res.status(404).json({
             message:"User Not Exist"
          })
        }else{
            bcrypt.compare(password, user[0].password, function(err, result) {
                if(err){
                    res.status(404).json({
                    message:"Someting Wrong"
                 })
                }
                if(result){

                  const token = jwt.sign(
                        {email: user[0].email, _id: user[0]._id},
                         "SourabhSecretKey"
                         )

                    res.status(200).json({
                    message:"User Found",
                    token: token,
                 }) 
                }else{
                    res.status(404).json({
                    message:"Someting Wrong"
                })
            }
            });
         
         }
    })
    .catch(err=> {
        res.json({error: err})
    })
    
    
}

module.exports = getLoginUser;
module.exports = createUser;
module.exports = createUser;
module.exports = loginUser;
