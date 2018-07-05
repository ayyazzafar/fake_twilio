var passport = require('passport');
var passportHttp = require('passport-http');
var express = require('express');
var router = express.Router();
const loaDocument = require('./loaDocument');
passport.use(new passportHttp.BasicStrategy(
    function (userid, password, done) {

        return done(null, userid && password ? userid : false);
    }
));


router.post('/', passport.authenticate('basic', {session: false}), function (req, res) {

    if (req.body.AddressSid) {
        loaDocument(req, res);
    }

});


module.exports = router;

