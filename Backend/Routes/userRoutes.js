const express = require('express')
const UserModel = require('../Model/User')
const routes = express.Router();


routes.post('/adduser', (req, res, next) => {
    
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            technology: req.body.technology,
            company: req.body.company
        });

        UserModel.findOne({ email: req.body.email }).then(user1 => {
            if (user1) {
                return res.status(401).json({
                    message: "UserData Already Exist"
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

    routes.get('/users', (req, res, next) => {
    UserModel.find().then(user => {
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).json({ message: "User not found!" });
        }
       
    });
});

   
routes.put('/edit/:id',(req, res, next) =>{
    UserModel.updateOne({ _id: req.params.id}).then(result => {
            if(result){
                res.status(200).json({ message: "Update successful!" });
            }
            
            else {
                res.status(500).json({ message: "Error Upating User" });
            }
        });
});
    routes.delete('/delete/:id', (req, res) => {
        UserModel.findOneAndDelete(req.params.id, req.body, function(err, response){
      res.json(response);
   });
    })
    


module.exports = routes;