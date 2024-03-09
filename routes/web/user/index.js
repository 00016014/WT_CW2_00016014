const express = require('express');
const router = express.Router();
const task_controller = require('../../../controllers/web');

router.get('/to-do', task_controller.read_tasks);
router.get("/edit/:id", task_controller.edit_task)
router.get('/delete/:id', task_controller.delete_task)

module.exports = router;