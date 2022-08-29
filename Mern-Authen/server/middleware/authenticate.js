//authenticate is the middle ware here
//It will check before the response.

const Users =require('../models/userSchema');
const jwt = require('jsonwebtoken')

const authenticate = async (req,res)=>{
    try{
        //Get The Cookies!
        const token = res.cookies.jwt;
        if(!token){
            res.status(401).send('No token')
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

            if(!rootUser){
                res.status(401).send("User Not Found")
            }else{
                res.status(200).send("Authorized USer")
            }
        }
        next()
    } catch (error){
        res.status(401).send("Error!")
        console.log(error);
    }
}

module.exports = authenticate;