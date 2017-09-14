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
    password: hashPassword,
    salt: randomSalt
  })
  .then(() => {
    res.send(`Berhasil menambahkan user baru`)
  })
  .catch(err => console.log(err))
}

var loginUser = (req, res) => {
  User.findOne({username: req.body.username})
  .then(response => {
    let randomSalt = secret.random(10)
    let hashPassword = secret.createSalt(req.body.password, randomSalt)
    if(req.body.password == hashPassword){
      let token = jwt.sign({
        username: response.username
      })
      let userObj = {
        token: token,
        id: response._id,
        username: response.username
      }
      res.send(userObj)
    } else {
      res.send('Password salah!')
    }
  })
  .catch(err => console.log(err))
}

var deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('Deleted success')
  })
  .catch(err => console.log(err))
}

module.exports = {
  findAllData,
  registerUser,
  loginUser,
  deleteUser
}