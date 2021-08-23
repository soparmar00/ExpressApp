const express = require('express')
const PostModel = require('../Model/Post')
const routes = express.Router()

routes.post('/addpost', (req, res) => {
    const post = new PostModel({
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId,
    })

     post.save().then(result => {
                if (!result) {
                    return res.status(500).json({
                        message: "Error Creating r"
                    })
                }
                res.status(201).json({
                    message: "Post created!",
                    result: result
                });
        })
})

routes.get('/post',(req, res) => {
    PostModel.find().then(post => {
        if(post){
            res.status(200).json(post);
        }
        else{
            res.status(404).json({ message: "post not found!" });
        }   
    })
})




module.exports = routes;