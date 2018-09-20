const { Router } = require('express');

const router = Router();

// Cargamos todos los middlewares

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Cargamos las rutas por módulos

const usersRouter = require('./users');

router.get('/', (req, res) => {
    res.send('Bienvenido a CiberQuizz CUCEI!');
});

router.use('/users', usersRouter);

module.exports = router;
