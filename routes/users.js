const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.post('/', (req, res) => {
    const response = controller.add(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const response = controller.find(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/', (req, res) => {
    const response = controller.list(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.put('/', (req, res) => {
    const response = controller.edit(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.delete('/', (req, res) => {
    const response = controller.delete(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.post('/friends', (req, res) => {
    const response = controller.addFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/friends/:username', (req, res) => {
    const response = controller.findFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/friends', (req, res) => {
    const response = controller.friendList(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.put('/friends/request', (req, res) => {
    const response = controller.editStatusFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.delete('/friends', (req, res) => {
    const response = controller.deleteFriend(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

module.exports = router;
