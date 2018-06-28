var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();


router.post('/', function (req, res) {

    res.send('Hello world');

});

module.exports = router;
