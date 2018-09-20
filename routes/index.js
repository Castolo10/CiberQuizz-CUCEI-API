const { Router } = require('express');

const router = Router();

// Cargamos todos los middlewares

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Cargamos las rutas por módulos

const categoriesRouter = require('./categories');

const loginRouter = require('./login');

const playRouter = require('./play');

const questionsRouter = require('./questions');

const usersRouter = require('./users');

router.get('/', (req, res) => {
    res.send('Bienvenido a CiberQuizz CUCEI!');
});

router.use('/categories', categoriesRouter);

router.use('/login', loginRouter);

router.use('/play', playRouter);

router.use('/questions', questionsRouter);

router.use('/users', usersRouter);

module.exports = router;
