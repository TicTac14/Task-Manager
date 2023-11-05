const express = require('express');
const router = express.Router();
const {getTasks, getSpecifiedTask, createTask, deleteTask, updateTask} = require('../controller/tasks.js');

router.get('/', getTasks);
router.get('/:id', getSpecifiedTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);


module.exports = router;