const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.send("<h1>Hello World,</h1>");
});
app.get('/contact', function(req,res){
    res.send("Contact me at:");
});
app.get('/about', function(req,res){
    res.send("I am a web developer");
});
app.get('/hobbies', function(req,res){
    res.send("<ul><li>Reading</li><li>Traveling,visiting,playig,hunting</li><li>Coding</li></ul>");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000")
}
);