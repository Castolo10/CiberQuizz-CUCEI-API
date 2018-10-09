require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');
const createError = require('http-errors');
// const { errorHandler } = require('./middlewares');

const app = express();

// cargamos middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuramos cors
var corsOptions = {
  origin: 'ciberquizz-cucei.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Carga rutas en la app
app.use(cors());
app.options('*', cors()); // Incluirlo antes del resto de rutas
app.use(router);

<<<<<<< HEAD
app.use(errorHandler);
/*
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});*/

app.listen(3000);
console.log('servidor express escuchando');
=======
// pasamos el 404 al errorHandler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = app;
>>>>>>> d4615c80996817dbe3e8f74269501995fb1aec04
