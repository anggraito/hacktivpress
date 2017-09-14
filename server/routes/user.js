const express = require('express')
const router = express.Router()

var controllerUser = require('../controllers/user')

router.get('/', controllerUser.findAllData)
router.post('/', controllerUser.registerUser)

module.exports = router