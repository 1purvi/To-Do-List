const router = require("express").Router()
const Todo = require("../models/Todo");



router.get("/",async function(req,res){
    const allTodo = await Todo.find();
    res.render("index",{todos:allTodo});
});



module.exports = router;