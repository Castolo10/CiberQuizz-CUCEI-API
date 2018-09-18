const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Bienvenido a CiberQuizz CUCEI!');
});

// Lista Administradores

app.get('/admin', (req, res) => {
    const json = {
        response: 'ok',
        data: [{
            id: 1,
            permissions: true,
            username: 'LeAdmin',
            password: '1a2b3c4d5e6f7g8h9i',
            mail: 'LeAdministrador@gmail.com',
        },
        {
            id: 2,
            permissions: true,
            username: 'LeAdminv2',
            password: '1a2b3c4d5e6f7g8h9i',
            mail: 'LeAdministrador2@gmail.com',
        },
        {
            id: 1,
            permissions: true,
            username: 'LeAdminv3',
            password: '1a2b3c4d5e6f7g8h9i',
            mail: 'LeAdministrador3@gmail.com',
        },
        ],
    };
    res.send(json);
});

// Lista de usuarios

app.get('/users', (req, res) => {
    const persona = [{
        id: 1,
        username: 'Juancho01',
        name: 'Juan',
        mail: 'Juan@gmail.com',
    },
    {
        id: 2,
        username: 'Juancho02',
        name: 'Juan',
        mail: 'Juan@gmail.com',
    },
    {
        id: 3,
        username: 'Juancho03',
        name: 'Juan',
        mail: 'Juan@gmail.com',
    }];
    res.send(persona);
});

// LogIn UsuariosAdmin

app.post('/login', (req, res) => {
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

app.post('/admin', (req, res) => {
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

app.post('/signin', (req, res) => {
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

// Ver perfil usuario

app.get('/users/:id', (req, res) => {
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

app.put('/users/:id', (req, res) => {
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

app.delete('/users', (req, res) => {
    res.send(`se ha eliminado el usuario ${req.body.username} exitosamente!`);
});

// Lista de preguntas

app.get('/questions', (req, res) => {
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

app.get('/questions/:id', (req, res) => {
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

app.put('/play', (req, res) => {
    res.send(`Has elegido ${req.body.response} como respuesta`);
});

// Solicitud de Amistad

app.post('/user/friendreq', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            username: req.body.username,
        },
    };
    res.send(json);
});

// Aceptar solicitud de Amistad

app.put('/user/friendreq/pend', (req, res) => {
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

app.post('/submit', (req, res) => {
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

// app.get('/play', (req, res) => {
//     const json = {
//         response: 'ok',
//         data: {
//             totalpoints: 1,
//         },
//     };
//     res.send(json);
// });

// Retar amigos

// app.post('/play', (req, res) => {
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

app.get('/play', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            category: req.body.category,
        },
    };
    res.send(json);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
