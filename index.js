const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a CiberQuizz CUCEI!');
});

app.get('/users', (req, res) => {
  const user = [
    {
      id: 1,
      name: 'Juan',
      mail: 'Juan@correo',
    },
  ];
  
  res.send(user);
  
});

app.get('/users/:userId', (req, res) => {
  const user = {
    id: req.params.userId,
    name: 'Juan${req.params.userId}',
    mail: 'Juan${req.params.userId}@correo',
  };
  
  res.send(user);
  
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
