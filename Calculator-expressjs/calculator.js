const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true }));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
 
app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = num1 + num2;
    res.send("Result is :- " + num3);
});

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})


app.post( "/bmiCalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height * height);
    res.status(200).send("BMI is " + bmi);
    console.log(weight + " " + height);
});
app.listen(3000, function(){
    console.log("Server Started 3000");
});