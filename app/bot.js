var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var apiai = require('apiai');
var api = apiai("6058192092c24cb98992128bb92d0f15");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));

//THis is the ask question api
app.post("/ask", function(req, res) {
    var question = req.body.question;
    var request = api.textRequest(question, {
        sessionId: 'LTP1234'
    });

    request.on('response', function(response) {
        console.log(response);
        res.status(200).send({
            data: response.result.fulfillment.speech,
            status: 'ok'
        });
    });
    
    request.on('error', function(error) {
        console.log(error);
        res.status(500).send({
            data: 'Could not get response from apiai',
            status: 'failed'
        });
    });
    
    request.end();
});

var server_port = process.env.YOUR_PORT || process.env.PORT;

app.listen(server_port, function() {
    console.log("Listening on " + (5000));
});