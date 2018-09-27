exports.isAdmin = (req, res, next) => {
    if (req.body.permissions !== true) {
        res.send('no tienes permisos!');
    }
    if (req.body.permissions === true) {
        next();
    }
};

exports.requiredFields = (req, res, next) => {
    if ((req.body.username === '') || (req.body.mail === '')
    || (req.body.password === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};
