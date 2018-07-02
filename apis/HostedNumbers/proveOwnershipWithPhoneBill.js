module.exports = function proveOwnershipWithPhoneBill(req, res) {


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
    }
    res.send(
        {
            "status": "received",
            "date_updated": "2018-01-21T22:16:11Z",
            "verification_code": null,
            "incoming_phone_number_sid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "failure_reason": "",
            "verification_attempts": 0,
            "verification_type": "phone-bill",
            "capabilities": {
                "mms": false,
                "voice": false,
                "sms": true
            },
            "sid": "HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "phone_number": "+18444905863",
            "call_delay": 0,
            "signing_document_sid": null,
            "verification_document_sid": "RI2ad9942e6daa7d8e87a154f6f675f3f8",
            "verification_call_sids": [],
            "extension": null,
            "url": process.env.BASE_URL + "/HostedNumbers/HostedNumberOrders/HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "friendly_name": "My_Sms_Hosted_Number_Order",
            "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "date_created": "2018-01-21T21:40:55Z"
        });
}

