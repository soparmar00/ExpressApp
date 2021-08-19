const express = require('express')
const CommentModel = require('../Model/Comment')
const routes = express.Router()

routes.post('/addcomment', (res, req) => {
    const comment = new CommentModel({
        postId: req.body.postId,
        name: req.body.name,
        comment: req.body.comment,
    })

    comment.save().then(resutlt => {
        if (!result) {
                    return res.status(500).json({
                        message: "Error Creating USer"
                    })
                }
                res.status(201).json({
                    message: "Comment created!",
                    result: result
                });
    })
})

module.exports = routes;