const { Router } = require('express');

// const usersCtrl = require('../controllers/users');
//
const userMidd = require('../middlewares/users.js');

const router = Router();

// Lista usuarios

router.get('/', userMidd.isAdmin, (req, res) => {
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

// Agregar usuario

router.post('/signin', userMidd.usersRF, (req, res) => {
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

router.delete('/', userMidd.isAdmin, (req, res) => {
    res.send(`se ha eliminado el usuario ${req.body.username} exitosamente!`);
});

// Agregar admin

router.post('/admin', userMidd.isAdmin, (req, res) => {
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

// Eliminar admin

router.delete('/admin', userMidd.isAdmin, (req, res) => {
    res.send(`se ha eliminado el usuario ${req.body.username} exitosamente!`);
});

// Lista de amigos

router.get('/friends', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            username: req.body.username,
        },
    };
    res.send(json);
});

// Solicitud de Amistad

router.post('/friends', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            username: req.body.username,
        },
    };
    res.send(json);
});

// Aceptar solicitud de Amistad(modificar status)

router.put('/friends/req', (req, res) => {
    const json = {
        response: 'ok',
        data: {
            username: 'Juan',
            status: req.body.status,
        },
    };
    res.send(json);
});

router.delete('/friends', (req, res) => {
    res.send(`Se ha eliminado el usuario ${req.body.username} de tu lista de amigos`);
});

module.exports = router;
