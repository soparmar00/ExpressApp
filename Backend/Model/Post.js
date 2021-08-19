const mongoose = require('mongoose')
const UserModel = require('./User')

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    userId: String,
   
})


const PostModel = new mongoose.model('postdetails', postSchema)

module.exports = PostModel;


