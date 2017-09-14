const Article = require('../models/articles')

var getAllData = (req, res) => {
  Article.find()
  .then((articles) => {
    res.send(articles)
  })
  .catch(err => console.log(err))
}

var getOneData = (req, res) => {
  Article.findById({_id:req.params.id})
  .then((article) => {
    res.send(article)
  })
  .catch(err => console.log(err))
}

var createData = (req, res) => {

}

module.exports = {
  getAllData, getOneData
}