const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      axios = require('axios');
const user = require('./routes/user');
      article = require('./routes/article');
const app = express();
const port = process.env.PORT || 3000 ;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect database
var url = 'mongodb://localhost/hacktivpress-anggraito';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// route setting use
app.use('/', user)
app.use('/articles', article)

app.listen(port);
console.log('Your presentation is running on http://localhost:' + port);