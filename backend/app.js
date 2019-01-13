const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const contactRoutes = require('./routes/contact-router');
const messageRoutes = require('./routes/message-router');
const app = express();

// Express: Third party library that provides a robust set of features for web applications
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

mongoose
  .connect(`mongodb+srv://mggmanik:${process.env.MONGO_ATLAS_PW}@cluster0-seypl.mongodb.net/node-angular?retryWrites=true`, {useNewUrlParser: true})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/contact', contactRoutes);
app.use('/api/message', messageRoutes);

module.exports = app;
