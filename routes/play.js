const express = require('express');
const controller = require('../controllers/play');

const router = express.Router();

router.post('/', (req, res) => {
    const response = controller.addGame(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/:idGame', (req, res) => {
    const response = controller.findGame(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/', (req, res) => {
    const response = controller.listOfGames(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/:username/matchHistory', (req, res) => {
    const response = controller.matchHistory(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.delete('/', (req, res) => {
    const response = controller.deleteGame(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.post('/game', (req, res) => {
    const response = controller.addToDetails(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/game/:idGame', (req, res) => {
    const response = controller.findDetails(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.get('/game', (req, res) => {
    const response = controller.listOfDetalis(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.put('/game', (req, res) => {
    const response = controller.editDetails(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

router.delete('/', (req, res) => {
    const response = controller.deleteDetails(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

module.exports = router;
