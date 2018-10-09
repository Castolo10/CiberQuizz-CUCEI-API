require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const router = require('./routes');

const { errorHandler } = require('./middlewares');

const app = express();

// cargamos middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Carga rutas en la app

app.use(router);

app.use(errorHandler);
/*
app.listen(3000);
console.log('servidor express escuchando');
<<<<<<< HEAD
*/
// pasamos el 404 al errorHandler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = app;
=======
>>>>>>> parent of ab9ccda... Merge branch 'feature' of https://github.com/Castolo10/CiberQuizz-CUCEI-API into feature
