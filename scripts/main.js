document.addEventListener('DOMContentLoaded', () => {
    console.log('Document ready');
    const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen( () => {
    console.log(`Server is running on https://wolfan00.github.io/NarinGece`);
});

    // Buraya JavaScript kodlarınızı ekleyebilirsiniz.
});
