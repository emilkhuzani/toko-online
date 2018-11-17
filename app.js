var express = require('express');
var path = require('path');

//initial app
var app=express();

//setup view engine pake ejs
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

//setup server
var port = 3000;
app.listen(port,function(err){
  if(err){
  	console.log("terjadi error",err);
  }else{
  	console.log("runninng di port 3000");
  }
});