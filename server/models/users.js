const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  },
  password: {
    type: String,
    required: [true, 'Tidak boleh kosong']
  }
})
// compiling model from schema
var User = mongoose.model('user', userSchema);

module.exports = User