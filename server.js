
'use strict'

const express = require('express');
const request = require('request');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const ECT = require('ect');
const ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });

const API = require('./APIHelper.js')

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 5000));

app.use(morgan('dev'))

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

//Routes
app.get('/', function (req, res){
    res.render('hotelDeals', {'title' : 'Expedia'});
});

app.post('/', function (req, res){
    API.getHotelsDeals(req.body.cityName, req.body.checkinDate, req.body.length)
    .then(function (deals) {
      console.log(deals);
      res.render('hotelDeals', {'deals' : deals.offers.Hotel})
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send(error);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});