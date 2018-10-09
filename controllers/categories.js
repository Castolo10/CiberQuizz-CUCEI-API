const model = require('../models/categories');

exports.add = (req, res) => {
    const response = model.add(req.body.category, req.body.content);
    res.send(response);
};

exports.find = (req, res) => {
    const response = model.find(req.params.category);
    res.send(response);
};

exports.list = (req, res) => {
    const response = model.list();
    res.send(response);
};

exports.edit = (req, res) => {
    const response = model.edit(req.body.category, req.body.content);
    res.send(response);
};
