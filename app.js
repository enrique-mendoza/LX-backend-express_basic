const express = require('express');

const app = express();
const port = 3000;

// default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// custom route
app.get('/launchx', (req, res) => {
    res.send('Welcome to Launch X');
});

// custom route for get objects
app.get('/explorerInNode', (req, res) => {
    const explorer = { name: 'Explorer', msg: 'Hello'}

    res.send(explorer);
});

// custom route for send query params
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});