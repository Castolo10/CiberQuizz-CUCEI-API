require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
const router = require('./routes');
// const { errorHandler } = require('./middlewares');

const app = express();

// cargamos middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Carga rutas en la app
app.use(cors());
app.options('*', cors()); // Incluirlo antes del resto de rutas
app.use(router);

// pasamos el 404 al errorHandler
app.use((req, res, next) => {
    next(createError(404));
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = app;
