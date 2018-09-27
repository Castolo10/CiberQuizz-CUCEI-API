exports.isAdmin = (req, res, next) => {
    if (req.body.permissions !== true) {
        res.send('no tienes permisos!');
    }
    if (req.body.permissions === true) {
        next();
    }
};

exports.requiredFields = (req, res, next) => {
    if ((req.body.category === '') || (req.body.content === '')
    || (req.body.correct === '') || (req.body.option_1 === '')
    || (req.body.option_2 === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};
