const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Testing Review Stage!zHello World! Nours First App in AWS!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
