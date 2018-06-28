const express = require('express')
const index = express()
var bodyParser = require('body-parser');

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));
index.use('/HostedNumbers/HostedNumberObject/', require('./apis/HostedNumbers/HostedNumberOrders'));

index.listen(3000, () => console.log('Example app listening on port 3000!'))