var express = require('express');
var app = express();
var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.get('/', function (req, res){
    res.render('index', {'title' : 'Expedia'});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});