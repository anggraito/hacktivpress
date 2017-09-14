const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  },
  content: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  },
  category: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

var Article = mongoose.model('article', articleSchema)

module.exports = Article