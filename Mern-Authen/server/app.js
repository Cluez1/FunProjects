// Import All dependencies
const express = require('express')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express()


//Configure ENV file here and require connection file
dotenv.config({path : './.env'});
require('./db/conn');
const port = process.env.PORT;

// Required Model 
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const authenticate = require('./middleware/authenticate')

//This Method is used to get data and cookies from Frontend application
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send("Hello World");
})

// Registration

app.post('/register', async (req, res)=> {
    try { 
        // Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email, 
            password : password
        });

        // Save Method is used to create user or insert user bug before 
        // saving or inserting, password will hash because of hashing. After Hash, it will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Register");

    } catch (error){
        res.status(400).send(error)
    }
})

//Login User
app.post('/login', async (req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        //Find User if Exist
        const user = await  Users.findOne({email : email});
        if(user){
            //Verify Password here
        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            //Generate Token Which is Define in User Schema
            const token = await user.generateToken();
            res.cookie("jwt", token, {
                // Expires Token in 24 Hours
                expires : new Date(Date.now() + 86400000),
                httpOnly : true
            })
            res.status(200).send("LoggedIn")
        }else{
            res.status(400).send("Invalid Credentials");
        }
        }else{
            res.status(400).send("Invalid Credentials");
        }
    } catch (error){
        res.status(400).send(error)
    }

})

// Message

app.post('/message', async (req, res)=> {
    try { 
        // Get body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email, 
            message : message
        });

        // Save Method is used to create user or insert user bug before 
        // saving or inserting, password will hash because of hashing. After Hash, it will save to DB
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent!");

    } catch (error){
        res.status(400).send(error)
    }
})
// Logout Page
app.get('/logout', (req, res) => {
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Has Logged Out.")
})

//Authentication
app.get('/auth', authenticate, (req,res) => {

})


//Run Server on 30001
app.listen(port, ()=>{
    console.log("Server is Listening");
})

// Backend complete once reached this section. 
//Need to connect to front end  with back end. 8/26 ecd