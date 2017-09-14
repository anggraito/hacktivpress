const express = require('express')
const router = express.Router()

var controllerUser = require('../controllers/user')

router.get('/users', controllerUser.findAllData)
router.post('/register', controllerUser.registerUser)
router.post('/login', controllerUser.loginUser)

module.exports = router