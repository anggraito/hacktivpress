const express = require('express')
const router = express.Router()

const controllerArticle = require('../controllers/article')

router.get('/', controllerArticle.getAllData)
router.get('/:id', controllerArticle.getOneData)
router.post('/', controllerArticle.createData)

module.exports = router