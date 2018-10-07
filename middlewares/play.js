exports.validPoints = (req, res, next) => {
    if (req.body.points < 0) {
        req.body.points = 0;
    } else {
        next();
    }
};
