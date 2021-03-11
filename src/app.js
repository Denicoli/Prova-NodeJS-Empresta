const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes');
require('dotenv').config();

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

app.use('/data', route);

module.exports = app;