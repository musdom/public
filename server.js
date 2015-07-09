var express = require('express');
var app = express();
var path = require('path');
var Client = require('node-rest-client').Client;
var options_auth={user:"h59tfr5dtfhdu",password:"fr6qgHmyfSxbqD5ifav5my3Cc_IlKlFRzzAvIiqdAKk"};

app.use(express.static('/media/Gudang_Touro/public'));
app.use(express.static('/media/Gudang_Touro/public/assets'));

client = new Client(options_auth);

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/api/bitx/',function(req,res){
	//console.log(req.query['MYR']);
	client.get("https://api.mybitx.com/api/1/ticker?pair=XBTMYR", function(data, response){
		// parsed response body as js object 
		//console.log(data);
		// raw response 
		//console.log(response);
		res.send(data);
	});
	
});

app.listen(80);
