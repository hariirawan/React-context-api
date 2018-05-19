const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();

const kostRoutes = require('./src/routes/kost');

mongoose.connect("mongodb://127.0.0.1:27017/api-kost");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

   if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      return res.status(200).json({});
   }
   next();

})

app.use('/kost', kostRoutes);

module.exports = app;