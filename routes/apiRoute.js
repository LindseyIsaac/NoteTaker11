const path = require('path');
const fs = require('fs')
const { v4: uuidv4 } = require('uuidv4');

app.get
app.post('/api/notes', (req, res) => {

app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let removeNote = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(removeNote));
    res.json(removeNote);
});
});