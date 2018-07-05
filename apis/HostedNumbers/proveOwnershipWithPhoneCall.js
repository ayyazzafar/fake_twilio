const request = require('request')

module.exports = function proveOwnershipWithPhoneCall(req, res) {


    console.log('user is');
    console.log(req.user);

    if (!req.headers.authorization) {
        res.send({
            "code": 20003,
            "detail": "Your AccountSid or AuthToken was incorrect.",
            "message": "Authentication Error - No credentials provided",
            "more_info": "https://www.twilio.com/docs/errors/20003",
            "status": 401
        });
    } else {

    }
    res.send(
        {
            "status": "pending-verification",
            "unique_name": null,
            "date_updated": "2018-07-01T16:09:49Z",
            "cc_emails": [],
            "verification_code": "12345",
            "incoming_phone_number_sid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "failure_reason": null,
            "verification_attempts": 1,
            "verification_type": "phone-call",
            "capabilities": {
                "voice": false,
                "sms": true,
                "mms": true
            },
            "sid": "000000000000000000000000000011111000000001",
            "email": null,
            "phone_number": req.body.phone_number,
            "address_sid": null,
            "call_delay": 0,
            "signing_document_sid": null,
            "verification_document_sid": null,
            "verification_call_sids": [
                "CA64122ad210afd5fc200d6b197888944b"
            ],
            "extension": null,
            "url": process.env.baseUrl + "HostedNumbers/HostedNumberOrders/HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "friendly_name": null,
            "account_sid": req.user,
            "date_created": "2018-06-30T00:43:58Z"
        });

    notifyToCallbackUrl('pending-verification', 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', req.body.PhoneNumber, 'http://localhost:3100/v2/api/numbers/hosted/statusCallback');


    setTimeout(() => {
        notifyToCallbackUrl('verified', 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', req.body.phone_number, 'http://localhost:3100/v2/api/numbers/hosted/statusCallback');
    }, 4000);

}


function notifyToCallbackUrl(Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl) {

    request.post({
        url: StatusCallbackUrl,
        form: {Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl}
    }, function (err, httpResponse, body) {
        console.log(err);
    });

}