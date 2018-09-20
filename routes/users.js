const { Router } = require('express');

const usersCtrl = require('../controllers/users');

const router = Router();

router.get('/', (req, res) => {
    const persona = [{
        id: 1,
        permissions: true,
        username: 'Juancho01',
        name: 'Juan',
        mail: 'Juan@gmail.com',
    },
    {
        id: 2,
        permissions: false,
        username: 'Juancho02',
        name: 'Juan',
        mail: 'Juan@gmail.com',
    },
    {
        id: 3,
        permissions: false,
        username: 'Juancho03',
        name: 'Juan',
        mail: 'Juan@gmail.com',
    }];
    res.send(persona);
});


// Ver perfil usuario

router.get('/:id', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: req.params.id,
            username: `Juancho${req.params.id}`,
            name: 'Juan',
            mail: `Juan${req.params.id}@gmail.com`,
        },
    };

    res.send(json);
});

// Editar usuario

router.put('/:id', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: req.params.id,
            username: 'Username placeholder',
            name: req.body.name,
            mail: req.body.mail,
            password: req.body.password,
        },
    };
    res.send(json);
});

// Eliminar usuario

router.delete('/', (req, res) => {
    res.send(`se ha eliminado el usuario ${req.body.username} exitosamente!`);
});

// LogIn UsuariosAdmin

router.post('/login', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: 1,
            username: req.body.username,
            password: req.body.password,
        },
    };
    res.send(json);
});

// Agregar Administradores

router.post('/admin', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: 100,
            permissions: true,
            username: req.body.username,
            mail: req.body.mail,
            password: req.body.password,
        },
    };

    res.send(json);
});

// Agregar usuario

router.post('/signin', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            id: 100,
            username: req.body.username,
            name: req.body.name,
            mail: req.body.mail,
            password: req.body.password,
        },
    };
    res.send(json);
});
// Lista de preguntas

router.get('/questions', (req, res) => {
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

// Aprobar preguntas

router.get('/questions/:id', (req, res) => {
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
    if (req.body.status === true) {
        res.send('Pregunta aprobada');
    } else {
        res.send('Pregunta descartada');
    }
});

// Contestar pregunta

router.put('/play', (req, res) => {
    res.send(`Has elegido ${req.body.response} como respuesta`);
});

// Solicitud de Amistad

router.post('/user/friendreq', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            username: req.body.username,
        },
    };
    res.send(json);
});

// Aceptar solicitud de Amistad

router.put('/user/friendreq/pend', (req, res) => {
    // let cad = '';
    //
    // if (req.body.status == true) {
    //     cad = 'Ahora son amigos!';
    // } else {
    //     cad = 'Has archivado esta solicitud';
    // }
    const json = {
        response: 'ok',
        data: {
            username: 'Juan',
            status: req.body.status,
        },
    };
    res.send(json);
});

// Crear pregunta

router.post('/submit', (req, res) => {
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

// Ganar puntos

// router.get('/play', (req, res) => {
//     const json = {
//         response: 'ok',
//         data: {
//             totalpoints: 1,
//         },
//     };
//     res.send(json);
// });

// Retar amigos

// router.post('/play', (req, res) => {
//     const json = {
//         response: 'ok',
//         data: {
//             username: req.body.username,
//         },
//     };
//     res.send(json);
//     res.send(`Se ha enviado el desafio a ${req.body.username}`);
// });

// Elegir categoría

router.get('/play', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            category: req.body.category,
        },
    };
    res.send(json);
});

module.exports = router;
