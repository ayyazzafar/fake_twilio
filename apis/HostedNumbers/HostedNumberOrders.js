var passport = require('passport');
var passportHttp = require('passport-http');
var express = require('express');
var router = express.Router();
const request = require('request');
passport.use(new passportHttp.BasicStrategy(
    function(userid, password, done) {

       return done(null, userid && password ? userid : false);
    }
));


router.post('/',  passport.authenticate('basic', { session: false }), function (req, res) {


    if(req.body.StatusCallbackUrl){
        notifyToCallbackUrl('twilio-processing', 'HR2329fff8ec855b82faff1e5f4c0a078d', req.body.PhoneNumber,req.body.StatusCallbackUrl);
    }


   console.log('user is'); console.log(req.user);

    if(req.body.PhoneNumber==undefined){
        return res.send({
            "code": 20001,
            "message": "Missing required parameter PhoneNumber in the post body",
            "more_info": "https://www.twilio.com/docs/errors/20001",
            "status": 400
        });
    } else if(req.body.SmsCapability==undefined) {
        return res.send({
            "code": 20001,
            "message": "Missing required parameter SmsCapability in the post body",
            "more_info": "https://www.twilio.com/docs/errors/20001",
            "status": 400
        });
    } else if(['true', 'false'].indexOf(req.body.SmsCapability)<0){
        return res.send({
            "code": 20001,
            "message": "SmsCapability must be either 'true' or 'false'",
            "more_info": "https://www.twilio.com/docs/errors/20001",
            "status": 400
        });
    } else if(req.body.PhoneNumber.length <1){
        return res.send({
            "code": 22102,
            "message": "Phone Number is required",
            "more_info": "https://www.twilio.com/docs/errors/22102",
            "status": 400
        });
    }  else if(req.body.PhoneNumber.length <7){
        return res.send({
            "code": 22102,
            "message": "Invalid E164 Phone Number: "+req.body.PhoneNumber,
            "more_info": "https://www.twilio.com/docs/errors/22102",
            "status": 400
        });
    } else if(req.body.PhoneNumber.length < 12){
        return res.send({
            "code": 22102,
            "message": "Invalid Phone Number: "+req.body.PhoneNumber,
            "more_info": "https://www.twilio.com/docs/errors/22102",
            "status": 400
        });
    } else if(!req.headers.authorization){
        return res.send({
            "code": 20003,
            "detail": "Your AccountSid or AuthToken was incorrect.",
            "message": "Authentication Error - No credentials provided",
            "more_info": "https://www.twilio.com/docs/errors/20003",
            "status": 401
        });
    }
    res.send({
        "status": "twilio-processing",
        "unique_name": null,
        "date_updated": "2018-06-30T00:43:58Z",
        "cc_emails": [],
        "verification_code": null,
        "incoming_phone_number_sid": "PN4d7e4c6ee959aeb085e0be1d49eca4fb",
        "failure_reason": null,
        "verification_attempts": 0,
        "verification_type": "phone-call",
        "capabilities": {
            "voice": false,
            "sms": true,
            "mms": true
        },
        "sid": "HR2329fff8ec855b82faff1e5f4c0a078d",
        "email": null,
        "phone_number": req.body.PhoneNumber,
        "address_sid": null,
        "call_delay": 0,
        "signing_document_sid": null,
        "verification_document_sid": null,
        "verification_call_sids": [],
        "extension": null,
        "url": "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/",
        "friendly_name": null,
        "account_sid": req.user,
        "date_created": "2018-06-30T00:43:58Z"
    });

});


module.exports = router;

function notifyToCallbackUrl(Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl){

    request.post(StatusCallbackUrl).form({Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl});

}
