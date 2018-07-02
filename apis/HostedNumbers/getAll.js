module.exports = function fetchHostedNumberOrders(req, res) {

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
            "items": [
                {
                    "status": "received",
                    "unique_name": null,
                    "date_updated": "2018-06-30T00:43:58Z",
                    "cc_emails": [],
                    "verification_code": null,
                    "incoming_phone_number_sid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "failure_reason": null,
                    "verification_attempts": 0,
                    "verification_type": "phone-call",
                    "capabilities": {
                        "mms": true,
                        "sms": true,
                        "voice": false
                    },
                    "sid": "HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "email": null,
                    "phone_number": "+13128077390",
                    "address_sid": null,
                    "call_delay": 0,
                    "signing_document_sid": null,
                    "verification_document_sid": null,
                    "verification_call_sids": [],
                    "extension": null,
                    "url": process.env.BASE_URL + "/HostedNumbers/HostedNumberOrders/HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "friendly_name": null,
                    "account_sid": "ACfc8f11bce7bb9b7bc1df11f9388470ed",
                    "date_created": "2018-06-30T00:43:58Z"
                },
                {
                    "status": "failed",
                    "unique_name": null,
                    "date_updated": "2018-02-14T20:00:00Z",
                    "cc_emails": [],
                    "verification_code": null,
                    "incoming_phone_number_sid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "failure_reason": "The customer did not start the verification process within 7 days of submitting the Hosted Number Order. Please reach out to HostedSMS@twilio.com.",
                    "verification_attempts": 0,
                    "verification_type": "phone-call",
                    "capabilities": {
                        "mms": false,
                        "sms": true,
                        "voice": false
                    },
                    "sid": "HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "email": "development.geektech@gmail.com",
                    "phone_number": "+18444725977",
                    "address_sid": "AD0544b180b4603002d9e291203bee0eb0",
                    "call_delay": 0,
                    "signing_document_sid": null,
                    "verification_document_sid": null,
                    "verification_call_sids": [],
                    "extension": null,
                    "url": process.env.BASE_URL + "/HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "friendly_name": "girish on Wed Jan 31 2018 14:24:39 GMT+0530 (IST)",
                    "account_sid": "ACfc8f11bce7bb9b7bc1df11f9388470ed",
                    "date_created": "2018-01-31T08:54:44Z"
                }
            ],
            "meta": {
                "page": 0,
                "page_size": 50,
                "first_page_url": "https://preview.twilio.com/HostedNumbers/HostedNumberOrders?PageSize=50&Page=0",
                "previous_page_url": null,
                "url": "https://preview.twilio.com/HostedNumbers/HostedNumberOrders?PageSize=50&Page=0",
                "next_page_url": null,
                "key": "items"
            }
        });
}

