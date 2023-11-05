const data = require('../data.js');

const getTasks = (req, res) => {
    try {
        res.status(200).json({success: true, data: data.tasks});
    } catch (error) {
        res.status(404).json({success:false, msg:"GET requrest failed..."})
    }
}

const getSpecifiedTask = (req, res) => {
    const {id} = req.params;
    const specifiedTask = data.tasks.filter(item => {
        return item.id == id
    })[0];
    console.log(specifiedTask);
    try {
        res.status(200).json({success: true, response:specifiedTask})
    } catch (error) {
        res.status(404).json({success:false, msg:"GET requrest failed..."})
    }
}

const createTask = (req, res) => {
    const {name, id} = req.query;
    data.tasks.push({name:name, id:id});
    try {
        res.status(200).json({success:true})
    } catch (error) {
        res.status(404).json({success:false, msg: error.message});
    }
}

const deleteTask = (req, res) => {
    const {id} = req.params;
    const currTask = data.tasks.find(item => {
        return item.id == id;
    });
    const index = data.tasks.indexOf(currTask);
    data.tasks.splice(index, 1);

    try {
        res.status(200).json({sucess:true})
    } catch (error) {
        res.status(404).json({success:false});
    }

}

const updateTask = (req, res) => {
    
    try {
        res.status(200).json({success:true});
    } catch (error) {
        res.status(404).json({success:false})
    }
}

module.exports = {
    getTasks,
    getSpecifiedTask,
    createTask,
    deleteTask,
    updateTask
}