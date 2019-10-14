var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //ejs is templating 

//app.use(routes);

app.get("/", function(req,res){
   console.log("start page");
   res.render("index");
});

app.post("/", function(req,res){
   console.log(req.body.recipient);
   res.render("index");
});


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get("port"), function(){
   console.log("server started on port " + app.get("port")); 
});