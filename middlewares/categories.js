exports.requiredFields = (req, res, next) => {
    if (req.body.content === '') {
        res.send('campo invalido');
    } else {
        next();
    }
};
