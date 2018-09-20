const { Router } = require('express');

// const usersCtrl = require('../controllers/users');
// const dateMidd = require('../middleware/index');

const playMidd = require('../middlewares');

const router = Router();

router.get('/', (req, res) => {
    res.send('es el play');
});

// Contestar pregunta

router.put('/', (req, res) => {
    res.send(`Has elegido ${req.body.response} como respuesta`);
});

// Ganar o perder puntos

router.put('/', playMidd.validPoints, (req, res) => {
    const json = {
        response: 'ok',
        data: {
            points: req.body.points,
        },
    };
    res.send(json);
});

// Retar amigos

router.post('/', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            username: req.body.username,
        },
    };
    res.send(json);
    res.send(`Se ha enviado el desafio a ${req.body.username}`);
});

module.exports = router;
