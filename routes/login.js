const express = require('express');
const controller = require('../controllers/login');

const router = express.Router();

router.get('/:username/:password', (req, res) => {
    const response = controller.auth(req, res);
    response.then((result) => {
        res.json(result.rows);
    });
});

module.exports = router;
