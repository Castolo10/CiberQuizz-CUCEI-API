const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a CiberQuizz CUCEI!');
});

app.get('/users', (req, res)=> {
    const persona = {
        name: 'Juan',
        mail: 'Juan@gmail.com',
    };
    console.log(persona);
    res.send(persona);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
