var express = require('express');
var app = express();
var Handlebars = require('handlebars');

app.get('/', function(req,res){

	var source = "{{#list}}{{firstName}} {{lastName}}{{/list}}";
var template = Handlebars.compile(source);

var data = {
  "list": [
    {"firstName": "Yehuda", "lastName": "Katz"},
    {"firstName": "Carl", "lastName": "Lerche"},
    {"firstName": "Alan", "lastName": "Johnson"}
  ]
}

var result = template(data);

res.send(result);
});

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});