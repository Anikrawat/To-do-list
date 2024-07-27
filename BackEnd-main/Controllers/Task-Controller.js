const task = require("../Models/taskSchema");




const fetchTasks = async(req,res) => {
    try {
        const Tasks = await task.find({User: req.user.userId})
        res.json(Tasks)
    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
}



const addTasks = async(req,res) => {

    try {
        const { Title,Description,Tag } = req.body;
        const taskCreated = await task.create({ Title, Description, Tag, User:req.user.userId })
        res.status(200).json(taskCreated)
    } catch (error) {
        res.status(500).json({msg:"Internal Server error."})
    }
}


const updateTasks = async (req,res) => {
    try {
        const { Title,Description,Tag } = req.body;

        const newNote = {}

        if(Title){newNote.Title = Title}
        if(Description){newNote.Description = Description}
        if(Tag){newNote.Tag = Tag}

        const Task = await task.findById(req.params.id)

        if (!Task) {
            return res.status(404).json({msg: "Task not found."})
        }

        if(Task.User.toString() !== req.user.userId){
            return res.status(400).json({msg: "You are not allowed to update this."})
        }

        const updateTask = await task.findByIdAndUpdate(req.params.id,{$set:newNote}, { new: true })
        res.status(200).json(updateTask)

    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
}





const deleteTasks = async (req,res) => {
    try {
        const Task = await task.findById(req.params.id)

        if (!Task) {
            return res.status(404).json({msg: "Task not found."})
        }

        if(Task.User.toString() !== req.user.userId){
            return res.status(400).json({msg: "You are not allowed to update this."})
        }

        await task.findByIdAndDelete(req.params.id)

        res.status(200).json({msg:"Deleted successfully."})

    } catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
}

module.exports = {fetchTasks,addTasks,updateTasks,deleteTasks}