const express = require('express')
const TaskModel = require('../Model/Task')
const {addTask, getTask, deleteTask} = require('../Controller/task')
const routes = express.Router()

routes.post('/addtask',addTask)

routes.get('/task', getTask)

routes.delete('/deletetask/:id', deleteTask)


module.exports = routes;