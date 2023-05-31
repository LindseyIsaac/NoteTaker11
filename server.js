const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const db = require()


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);
app.use('/', routes);


app.listen(PORT, () => {
    console.log('available at local${PORT}');
});

