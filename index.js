const express = require('express')
const index = express()
var bodyParser = require('body-parser');
require('dotenv').config();

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));
index.use('/HostedNumbers/HostedNumberOrders/', require('./apis/HostedNumbers/HostedNumberOrders'));

index.listen(3000, () => console.log('Example app listening on port 3000!'))