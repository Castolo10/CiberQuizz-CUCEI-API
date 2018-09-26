require('dotenv').config();

const express = require('express');
// const something = require('./middleware/');

// console.log(something);

// const pgp = require('pg-promise');
//
// const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`);
//
// db.connect();
//
// db.query('SELECT 1 + 1 AS solution', err, rows, fields);

const app = express();

const router = require('./routes');

app.use(router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
