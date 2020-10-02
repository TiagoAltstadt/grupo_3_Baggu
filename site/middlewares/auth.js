module.exports = function(req, res, next) {
    if (req.session.user != undefined){
        res.locals.user = req.session.user;
    }else {
        res.locals.user = undefined;
    }
    next();
}