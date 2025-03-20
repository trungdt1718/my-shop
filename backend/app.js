const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/names', (req, res) => {
    res.send('Thành Trung');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})