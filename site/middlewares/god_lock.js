//  Este middleware va a controlar que un user logueado no entre a lugares donde no deberia, si lo intenta lo manda a home

module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.category_user_id == 2) {
        next();
    } else {
        res.redirect('/');
    }
}