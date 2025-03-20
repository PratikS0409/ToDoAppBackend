const { Router } = require('express');
const { getToDo, saveToDo } = require('../controller/ToDoController');

const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);

module.exports = router;