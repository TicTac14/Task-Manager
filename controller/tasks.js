const data = require('../data.js');

const getTasks = (req, res) => {
    try {
        res.status(200).json({success: true, msg:"GET request sucessful..."})
    } catch (error) {
        res.status(404).json({success:false, msg:"GET requrest failed..."})
    }
}

const getSpecifiedTask = (req, res) => {
    const {id} = req.query;
    const specifiedTask = data.tasks.filter(item => {
        return item.id == id
    })[0];
    try {
        res.status(200).json({success: true, data:specifiedTask})
    } catch (error) {
        res.status(404).json({success:false, msg:"GET requrest failed..."})
    }
}

module.exports = {
    getTasks,
    getSpecifiedTask
}