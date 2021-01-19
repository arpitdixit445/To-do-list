const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

let tasks = ["Gajar launga", "Halua banaunga", "Halua khaunga"];

app.get("/", function(req, res){
    let d = new Date();
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }

    let day = d.toLocaleDateString("en-US", options);

    res.render("list",{kindOfDay : day, tasks : tasks});
});

app.post("/", function(req, res){
    const task = req.body.task;
    if(task.length != 0){
        tasks.push(task);
    }
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Listening at port 3000...");
});