const router = require('express');

const { usersCtrl } = require('../controllers');

const middlewares = require('../middlewares');

// Lista usuarios

router.get('/', usersCtrl.getAll);

// Ver perfil usuario

router.get('/:id', usersCtrl.get);

// Agregar usuario

router.post('/', (req, res, next) => {
    middlewares.validator.validate(req, res, next, {
        body: {
            name: 'word, required',
            email: 'email, required',
            unwanted: 'required',
        },
    });
}, usersCtrl.create);

router.delete('/:id', usersCtrl.delete);

// Editar usuario

/* router.put('/:id', (req, res) => {
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
}); */

module.exports = router;
