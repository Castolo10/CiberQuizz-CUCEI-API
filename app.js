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

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
