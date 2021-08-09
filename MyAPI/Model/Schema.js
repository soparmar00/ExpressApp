const mongoose = require("mongoose")

const mySchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        technology: String,
        date: {
            type: Date,
            default: Date.now
        }
        
    })

    const MyModel = new mongoose.model('request', mySchema);

    const myData = new MyModel({
        name: "Sourabh Parmar",
        email: "125478@gmail.com",
        age: 21,
        technology: "JavaScript",
            
    }) 

    //myData.save()

module.exports = MyModel