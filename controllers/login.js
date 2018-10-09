const model = require('../models/login');

exports.auth = (req, res) => {
    const response = model.auth(req.body.username, req.body.password);
    res.send(response);
};
