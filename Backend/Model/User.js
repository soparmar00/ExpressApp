const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    technology: String,
    age: Number,
    company: String,

})

const UserModel = new mongoose.model('userdetail', userSchema);


module.exports = UserModel