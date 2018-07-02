var passport = require('passport');
var passportHttp = require('passport-http');
var express = require('express');
var router = express.Router();
const request = require('request');
const create = require('./create');
const get = require('./get');
const getAll = require('./getAll');
const proveOwnershipWithPhoneCall = require('./proveOwnershipWithPhoneCall');
const proveOwnershipWithPhoneBill = require('./proveOwnershipWithPhoneBill');
passport.use(new passportHttp.BasicStrategy(
    function(userid, password, done) {

       return done(null, userid && password ? userid : false);
    }
));


router.post('/',  passport.authenticate('basic', { session: false }), function (req, res) {

    create(req, resp);

});

router.post('/:HostedNumberOrderSid', passport.authenticate('basic', {session: false}), function (req, res) {

    if (req.body.VerificationType == 'phone-call') {
        proveOwnershipWithPhoneCall(req, res);
    } else if (req.body.VerificationType == 'phone-bill') {
        proveOwnershipWithPhoneBill(req, res);
    }


});

router.get('/:HostedNumberOrderSid*?', passport.authenticate('basic', {session: false}), function (req, res) {

    if (req.params.HostedNumberOrderSid) {
        get(req, res);
    } else {
        getAll(req, res);
    }


});


module.exports = router;

