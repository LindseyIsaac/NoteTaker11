const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const uuid = require('uuid');
// const { v4: uuidv4 } = require("uuid");
router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

   
router.post('/api/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    db.push(newNote);
    fs.writeFileSync('db/db.json', 
    JSON.stringify(db));
    res.json(db);
 });

router.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let trashNote = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(trashNote));
    res.json(trashNote);
});

module.exports = router;