const model = require('../models/login');

exports.auth = (req, res) => {
    const response = model.auth(req.params.username, req.params.password);
    res.send(response);
};
