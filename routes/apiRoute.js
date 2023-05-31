const path = require('path');
const fs = require('fs')
const { v4: uuidv4 } = require('uuidv4');
const path = require('path');
const router = require('express').Router();

app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    module.exports = router;
app.post('/api/notes', (req, res) => {

app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let trashNote = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(trashNote));
    res.json(trashNote);
});
});
