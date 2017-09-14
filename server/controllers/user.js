const User = require('../models/users')
const jwt = require('jsonwebtoken')
const secret = require('../helpers/auth')

var findAllData = (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
  .catch(err => console.log(err))
}

var registerUser = (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    salt: req.body.salt
  })
  .then(() => {
    res.send(`Berhasil menambahkan user baru`)
  })
  .catch(err => console.log(err))
}

var loginUser = (req, res) => {

}

module.exports = {
  findAllData,
  registerUser,
  loginUser
}