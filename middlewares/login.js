exports.requiredFields = (req, res, next) => {
    if ((req.body.username === '') || (req.body.password === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};
