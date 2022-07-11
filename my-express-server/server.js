const express = require("express");
const app = express();
//To load the content on the server.
app.get("/",function(request, response){
    response.send("<h1>Hello World</h1>");
});
//Contact page
app.get("/contact", function(req, res) {
    res.send("<h2>Contact Me At:- Harshpawar1999@gmail.com</h2>");
});
app.get("/about", function(req, res){
    res.send("<h2>Welcome</h2><p>About me: Hello folks I'm Harshwardhan Pawar.A Software Developer.</p>");
});

app.get("/hobbie", function(req, res){
    res.send("My hobbie is Travelling and Eating Good Food");
});
//To start the Server.
app.listen(5000, function() {
    console.log("Server Started on Port 3000");
});