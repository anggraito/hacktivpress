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
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then((article) => {
    res.send(`Berhasil menambahakan article "${article.title}"`)
  })
  .catch(err => console.log(err))
}

var updateData = (req, res) => {
  Article.findById(req.params.id)
  .then((article) => {
    article.title = req.body.article || article.title
    article.content = req.body.content || article.content
    article.category = req.body.category || article.category
    article.author = req.body.author || article.author

    article.save((err, data) => {
      if(err) {
        res.send(err)
      }
      res.send(data)
    })
  })
  .catch(err => console.log(err))
}

var getByAuthor = (req, res) => {
  var query = Article.where({author: req.params.author})
  query.findOne()
  .then((data) => {
    res.send(data)
    console.log(data)
  })
  .catch(err => console.log(err))
}

var getByCategory = (req, res) => {

}

var removeData = (req, res) => {
  Article.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('Hapus data oke')
  })
  .catch(err => console.log(err))
}

module.exports = {
  getAllData, getOneData,
  createData, updateData,
  getByAuthor,
  removeData
}