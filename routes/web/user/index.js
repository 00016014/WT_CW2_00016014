const express = require('express');
const router = express.Router();
const user_controller = require('../../../controllers/web');

router.get('/to-do', user_controller.add_task);

module.exports = router;