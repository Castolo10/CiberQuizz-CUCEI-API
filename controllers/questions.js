const model = require('../models/questions');

exports.add = (req, res) => {
    const response = model.add(req.body.content, req.body.opt1,
        req.body.opt2, req.body.solution, req.body.category, req.body.exist, req.body.status);
    res.send(response);
};

exports.find = (req, res) => {
    const response = model.find(req.params.idQuest);
    res.send(response);
};

exports.list = (req, res) => {
    const response = model.list();
    res.send(response);
};

exports.edit = (req, res) => {
    const response = model.edit(req.body.idQuest, req.body.content, req.body.opt1,
        req.body.opt2, req.body.solution, req.body.category, req.body.status);
    res.send(response);
};

exports.delete = (req, res) => {
    const response = model.delete(req.body.idQuest);
    res.send(response);
};
