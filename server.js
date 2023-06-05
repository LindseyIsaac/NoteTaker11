const express = require('express');

const app = express();

const fs = require('fs');

const PORT = process.env.PORT || 3001;

const db = require('./db/db.json')

const apiRoutes = require('./routes/apiRoute');

// const uuid = require('uuid');
const { v4: uuidv4 } = require("uuid");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', apiRoutes);
app.use('/', apiRoutes);


app.listen(PORT, () => {
    console.log('Listening at local${PORT}');
});