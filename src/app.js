'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = express.Router();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//routes

app.get('/', (req, res, next) => {
  res.render('index', {title: 'Jacob Kortbeek'});
  next();
});

//start servr on local host 3000
app.listen(process.env.PORT || 5000)

// app.listen(3000, () => {
//     console.log("running on port 3000");
// });
