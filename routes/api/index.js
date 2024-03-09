const express = require('express')
const task_router = require('./user')

const router = express.Router()

router.use('/task', task_router)

module.exports = router