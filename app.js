var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('/media/Gudang_Touro/public'));
app.use(express.static('/media/Gudang_Touro/public/assets'));

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.listen(80);
