const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000;
app.use(cors());
app.get('/random', (req, res) => res.json({
    number:Math.floor(Math.random()*Math.floor(100))
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))