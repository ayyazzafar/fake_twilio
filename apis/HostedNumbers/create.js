module.exports = function create(req, res) {


    if (req.body.PhoneNumber == undefined) {
        res.send({
            "code": 20001,
            "message": "Missing required parameter PhoneNumber in the post body",
            "more_info": "https://www.twilio.com/docs/errors/20001",
            "status": 400
        });
    } else if (req.body.SmsCapability == undefined) {
        res.send({
            "code": 20001,
            "message": "Missing required parameter SmsCapability in the post body",
            "more_info": "https://www.twilio.com/docs/errors/20001",
            "status": 400
        });
    } else if (['true', 'false'].indexOf(req.body.SmsCapability) < 0) {
        res.send({
            "code": 20001,
            "message": "SmsCapability must be either 'true' or 'false'",
            "more_info": "https://www.twilio.com/docs/errors/20001",
            "status": 400
        });
    } else if (req.body.PhoneNumber.length < 1) {
        res.send({
            "code": 22102,
            "message": "Phone Number is required",
            "more_info": "https://www.twilio.com/docs/errors/22102",
            "status": 400
        });
    } else if (req.body.PhoneNumber.length < 7) {
        res.send({
            "code": 22102,
            "message": "Invalid E164 Phone Number: " + req.body.PhoneNumber,
            "more_info": "https://www.twilio.com/docs/errors/22102",
            "status": 400
        });
    } else if (req.body.PhoneNumber.length < 12) {
        res.send({
            "code": 22102,
            "message": "Invalid Phone Number: " + req.body.PhoneNumber,
            "more_info": "https://www.twilio.com/docs/errors/22102",
            "status": 400
        });
    } else if (!req.headers.authorization) {
        res.send({
            "code": 20003,
            "detail": "Your AccountSid or AuthToken was incorrect.",
            "message": "Authentication Error - No credentials provided",
            "more_info": "https://www.twilio.com/docs/errors/20003",
            "status": 401
        });
    } else {
        res.send(
            {
                "account_sid": req.user,
                "address_sid": "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "call_delay": 0,
                "capabilities": {
                    "sms": true,
                    "voice": false
                },
                "cc_emails": [],
                "date_created": "2017-03-28T20:06:39Z",
                "date_updated": "2017-03-28T20:06:39Z",
                "email": "test@twilio.com",
                "extension": null,
                "failure_reason": "",
                "friendly_name": null,
                "incoming_phone_number_sid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "phone_number": req.body.PhoneNumber,
                "sid": "HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "signing_document_sid": "PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "status": "twilio-processing",
                "unique_name": null,
                "url": "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "verification_attempts": 0,
                "verification_call_sids": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "verification_code": null,
                "verification_document_sid": "RIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "verification_type": "phone-call",
                "sms_capability": null
            });
    }


    if (req.body.StatusCallbackUrl) {
        notifyToCallbackUrl('received', 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', req.body.PhoneNumber, 'https://preview.twilio.com');
    }
}


function notifyToCallbackUrl(Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl) {

    request.post(StatusCallbackUrl).form({Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl});

}