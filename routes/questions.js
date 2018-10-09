const { Router } = require('express');

// const usersCtrl = require('../controllers/users');
// const dateMidd = require('../middleware/index');

const questionMidd = require('../middlewares/questions.js');


const router = Router();

// Lista de preguntas

router.get('/', questionMidd.isAdmin, (req, res) => {
    const json = {
        response: 'ok',
        data: [{
            id: 1,
            status: false,
            category: 'categoria1',
            content: 'Placeholder question 1',
            correct: 'the correct option',
            option_1: 'distract 1',
            option_2: 'distract 2',
        },
        {
            id: 2,
            status: false,
            category: 'categoria2',
            content: 'Placeholder question 2',
            correct: 'the correct option',
            option_1: 'distract 1',
            option_2: 'distract 2',
        },
        {
            id: 1,
            status: false,
            category: 'categoria3',
            content: 'Placeholder question 3',
            correct: 'the correct option',
            option_1: 'distract 1',
            option_2: 'distract 2',
        },
        ],
    };
    res.send(json);
});

// Ver pregunta

router.get('/:id', questionMidd.isAdmin, (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: req.params.id,
            status: false,
            category: 'categoria1',
            content: 'Placeholder question 1',
            correct: 'the correct option',
            option_1: 'distract 1',
            option_2: 'distract 2',
        },
    };
    res.send(json);
});

// Crear pregunta

router.post('/submit', questionMidd.requiredFields, (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: 100,
            status: false,
            category: req.body.category,
            content: req.body.content,
            correct: req.body.correct,
            option_1: req.body.option_1,
            option_2: req.body.option_2,
        },
    };
    res.send(json);
});

// Aprobar preguntas

router.patch ('/:id', questionMidd.isAdmin, (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: req.params.id,
            status: req.body.status,
            category: 'categoria1',
            content: 'Placeholder question 1',
            correct: 'the correct option',
            option_1: 'distract 1',
            option_2: 'distract 2',
        },
    };
    res.send(json);
});

// Eliminar preguntas

router.delete('/:id', questionMidd.isAdmin, (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: req.params.id,
            status: false,
            category: 'categoria1',
            content: 'Placeholder question 1',
            correct: 'the correct option',
            option_1: 'distract 1',
            option_2: 'distract 2',
        },
    };
    res.send(json);
});

module.exports = router;
