const request = require('request');

module.exports = function loaDocument(req, res) {

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
            "status": "signing",
            "date_updated": "2017-10-16T23:54:59Z",
            "cc_emails": req.body.CcEmails.split('&'),
            "url": process.env.BASE_URL + "/HostedNumbers/AuthorizationDocuments/PX5b7889b420ec6bca465c068f5bc2b67e",
            "address_sid": req.body.AddressSid,
            "sid": "PX5b7889b420ec6bca465c068f5bc2b67e",
            "date_created": "2017-10-16T23:54:58Z",
            "email": req.body.Email
        });

    notifyToCallbackUrl('signing', 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', req.body.PhoneNumber, 'http://localhost:3100/v2/api/numbers/hosted/statusCallback');
}

function notifyToCallbackUrl(Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl) {

    request.post({
        url: StatusCallbackUrl,
        form: {Status, HostedNumberOrderSid, PhoneNumber, StatusCallbackUrl}
    }, function (err, httpResponse, body) {
        console.log(err);
    });

}