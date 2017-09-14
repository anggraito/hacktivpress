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
  let randomSalt = secret.random(10)
  let hashPassword = secret.createSalt(req.body.password, randomSalt)
  User.create({
    username: req.body.username,
    password: req.body.password,
    salt: randomSalt
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