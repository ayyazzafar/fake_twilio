module.exports = function fetchHostedNumberOrder(req, res, HostedNumberOrderSid) {


    console.log('user is');
    console.log(req.user);

    if (!req.headers.authorization) {
        return res.send({
            "code": 20003,
            "detail": "Your AccountSid or AuthToken was incorrect.",
            "message": "Authentication Error - No credentials provided",
            "more_info": "https://www.twilio.com/docs/errors/20003",
            "status": 401
        });
    } else if (!req.body.HostedNumberOrderSid) {

    }
    res.send(
        {
            "status": "twilio-processing",
            "unique_name": null,
            "date_updated": "2018-06-30T00:43:58Z",
            "cc_emails": [],
            "verification_code": null,
            "incoming_phone_number_sid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "failure_reason": null,
            "verification_attempts": 0,
            "verification_type": "phone-call",
            "capabilities": {
                "voice": false,
                "sms": true,
                "mms": true
            },
            "sid": "HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "email": null,
            "phone_number": req.body.PhoneNumber,
            "address_sid": null,
            "call_delay": 0,
            "signing_document_sid": null,
            "verification_document_sid": null,
            "verification_call_sids": [],
            "extension": null,
            "url": process.env.BASE_URL + "/HostedNumbers/HostedNumberOrders/",
            "friendly_name": null,
            "account_sid": req.user,
            "date_created": "2018-06-30T00:43:58Z"
        });
}

