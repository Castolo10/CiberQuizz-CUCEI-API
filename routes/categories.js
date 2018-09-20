const { Router } = require('express');

// const usersCtrl = require('../controllers/users');
// const dateMidd = require('../middleware/index');

const catMidd = require('../middlewares');

const router = Router();

// Lista categorias

router.get('/', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            category: 'placeholder name',
            content: 'description',
        },
    };
    res.send(json);
});

// Elegir categoría(ver)

router.get('/:category', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            category: req.body.category,
        },
    };
    res.send(json);
});

// modificar categoria

router.put('/:category', catMidd.categoyRF, (req, res) => {
    const json = {
        response: 'ok',
        data: {
            content: req.body.category,
        },
    };
    res.send(json);
});

module.exports = router;
