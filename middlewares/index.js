exports.categoyRF = (req, res, next) => {
    if (req.body.content === '') {
        res.send('campo invalido');
    } else {
        next();
    }
};

exports.loginRF = (req, res, next) => {
    if ((req.body.username === '') || (req.body.password === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};

exports.validPoints = (req, res, next) => {
    if (req.body.points < 0) {
        req.body.points = 0;
    } else {
        next();
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.body.permissions !== true) {
        res.send('no tienes permisos!');
    }
    if (req.body.permissions === true) {
        next();
    }
};

exports.questionsRF = (req, res, next) => {
    if ((req.body.category === '') || (req.body.content === '')
    || (req.body.correct === '') || (req.body.option_1 === '')
    || (req.body.option_2 === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};

exports.usersRF = (req, res, next) => {
    if ((req.body.username === '') || (req.body.mail === '')
    || (req.body.password === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};
