const express = require('express');
const app = express()
app.use(express.json())

// import all routes
const products = require('./routes/products')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",'http://localhost:4000' ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/v1',products )


module.exports = app