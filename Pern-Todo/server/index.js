const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json()); //req.body - Allowing me to get JSON data

//Routes//


//Create Todo
//In order to post dta inside postgresm you have to use the INSERT INTO command.
app.post("/todos", async(req,res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", //To return the data to be visible in postman be sure to add RETURNING * and check the body.
        [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get ALL todos
app.get("./todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch (err) {
        console.error(err.message);
    }
});

//Get todo
//pull data from the table id and display on body in postmates through Json.
app.get("/todos/:id",async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        //The WHERE clause is more search specific on what you are trying to do.
        res.json(todo.rows[0])
        console.log(req.params);
    }catch (err) {
        console.error(err.message);
    }
});
//Update todo
app.put("/todos/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        //To update, you need to specify the table and then run SET for the description column.
        //You also need to specify WHERE the todo is located. *Dollar signs are just variable holders*
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]);
        res.json("Todo Updated!");
    }catch (err) {
        console.error(err.message);
    }
})


//Delete todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo Was Deleted!")
    }catch(err) {
        console.log(err.message);
    }
})

//Server Port
app.listen(5000, () => {
    console.log("Server has started on port 5000");
});