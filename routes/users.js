const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.post('/', (req, res) => {
    const response = controller.add(req, res);
    response.then((result) => {
        res.json(result);
    });
    response.catch((e) => {
        res.json(e);
    });
});

router.get('/:username', async (req, res) => {
    const response = await controller.find(req, res);
    res.json(response);
});

router.get('/', async (req, res) => {
    const response = await controller.list(req, res);
    res.json(response);
});

router.put('/:username', async (req, res) => {
    const response = await controller.edit(req, res);
    res.json(response);
});

router.delete('/', async (req, res) => {
    const response = await controller.delete(req, res);
    res.json(response);
});

router.post('/friends', (req, res) => {
    const response = controller.addFriend(req, res);
    response.then((result) => {
        res.json(result);
    });
    response.catch((e) => {
        res.json(e);
    });
});

router.get('/friends/:username', async (req, res) => {
    const response = await controller.findFriend(req, res);
    res.json(response);
});

router.get('/friends', async (req, res) => {
    const response = await controller.friendlist(req, res);
    res.json(response);
});

router.put('/friends/request', async (req, res) => {
    const response = await controller.editStatusFriend(req, res);
    res.json(response);
});

router.delete('/friends', async (req, res) => {
    const response = await controller.deleteFriend(req, res);
    res.json(response);
});

module.exports = router;
