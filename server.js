//jshint eversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hi</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: abc@gmail.com");
});

app.get("/about", function(req, res){
res.send("bio: lives in a house")
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
