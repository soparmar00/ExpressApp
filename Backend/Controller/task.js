const TaskModel =require("../Model/Task")
const  mongoose  = require("mongoose");

const addTask = async (req, res) => {
    const {user, title, date} = req.body;
    const task= new TaskModel({user, title, date})
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
     try {
         const id=req.params.id
        const task= await TaskModel.findByIdAndDelete(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({message:error.message})
        }
}

const filter = async (req, res) => {
    try{
        const {staD, endD} = req.query
        console.log(staD, endD)
        const task = await TaskModel.find({date: {$gte:(staD.toString()), $lte:(endD.toString())}})
        console.log("Task data",task)
        res.status(200).json(task)
    }
    catch (error) {
       res.status(404).json({message:error.message})   
    }
}



module.exports={addTask, getTask, deleteTask, filter};