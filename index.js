// Server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile("/home.html",{root:__dirname})
});
app.get('/c.html', (req, res) => {
    res.sendFile("/c.html",{root:__dirname})
});

app.listen(PORT, () => {
    console.log(`Server is established at port -&gt; ${PORT}`);
});
