const express = require('express')
const user_router = require('./user')

const router = express.Router()

router.use('/user', user_router)

module.exports = router