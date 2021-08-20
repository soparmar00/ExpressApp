const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    user: String,
    title: String,
    startDate: String,
    endDate: String,
})

const TaskModel = new mongoose.model('taskdetails', taskSchema)

module.exports = TaskModel;