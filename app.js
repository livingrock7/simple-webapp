

const express = require('express');
var path = require("path");
const bodyParser = require('body-parser');
//const request = require('request');
var routes = require("./routes");

var app = express();



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //ejs is templating 
app.set("port", process.env.PORT || 3000);

//app.use(routes);

app.get("/", function(req,res){
   console.log("start page");
   res.render("index");
});

/* app.post("/", function(req,res){
   console.log(req.body.recipient);
   console.log(req.body.amount);
   let userAddress = req.body.recipient;
   let tokenAmount = req.body.amount;
   //res.render("index");
}); */

app.listen(app.get("port"), function(){
   console.log("server started on port " + app.get("port")); 
});

