const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    postId: String,
    name: String,
    comment: String,
})

const CommentModel = new mongoose.model("commentdetails", commentSchema);

module.exports = CommentModel;