const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();



mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");


app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000,function(){
    console.log("server started listening to port 3000");
});