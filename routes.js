var express = require("express");

var router = express.Router();

//router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", function(req,res){
    console.log("start page");
    res.render("index");
});


router.post("/", function(req,res){
    console.log(req.body.recipient);
    res.render("index");
});

module.exports = router;