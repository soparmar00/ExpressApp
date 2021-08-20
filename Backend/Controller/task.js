const TaskModel =require("../Model/Task")
const  mongoose  = require("mongoose");

const addTask = async (req, res) => {
    const {user, title, startDate, endDate} = req.body;
    const task= new TaskModel({user, title, startDate, endDate})
    try {
        await task.save()
        res.status(201).json(task)
        
} catch (error) {
    res.send(409).json({message:error.message})
        }
}

const getTask =async (req,res)=>{
    try {
        const task= await TaskModel.find({})
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({message:error.message})
        }        
}

const deleteTask =async (req,res)=>{
    const id=req.params.id
     try {
        const task= await TaskModel.findByIdAndDelete(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({message:error.message})
        }
}

module.exports={addTask, getTask, deleteTask};