const model = require('../models/play');

exports.addGame = (req, res) => {
    const response = model.addGame(req.body.date, req.body.player1, req.body.player2);
    res.send(response);
};

exports.findGame = (req, res) => {
    const response = model.findGame(req.body.idGame);
    res.send(response);
};

exports.listOfGames = (req, res) => {
    const response = model.listOfGames();
    res.send(response);
};

exports.matchHistory = (req, res) => {
    const response = model.matchHistory(req.body.username);
    res.send(response);
};

exports.deleteGame = (req, res) => {
    const response = model.deleteGame(req.body.idGame);
    res.send(response);
};

exports.addToDetails = (req, res) => {
    const response = model.addToDetails(req.body.idGame, req.body.idQues,
        req.body.resP1, req.body.resP2);
    res.send(response);
};

exports.findDetails = (req, res) => {
    const response = model.findDetails(req.body.idGame);
    res.send(response);
};

exports.listOfDetalis = (req, res) => {
    const response = model.listOfDetalis();
    res.send(response);
};

exports.editDetails = (req, res) => {
    const response = model.editDetails(req.body.idGame, req.body.idQues,
        req.body.resP1, req.body.resP2);
    res.send(response);
};

exports.deleteDetails = (req, res) => {
    const response = model.deleteDetails(req.body.idGame, req.body.idQues);
    res.send(response);
};
