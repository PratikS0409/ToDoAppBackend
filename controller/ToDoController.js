const ToDoModels = require('../models/ToDoModels');
const ToDoModel = require('../models/ToDoModels');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.json(toDo);
}

module.exports.saveToDo = async (req, res) => {

    const  { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully");
            console.log(data);
            res.send(data);   
        })
}