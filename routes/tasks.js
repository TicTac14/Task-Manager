const express = require('express');
const router = express.Router();
const {getTasks} = require('../controller/tasks.js');

router.get('/', getTasks);




module.exports = router;