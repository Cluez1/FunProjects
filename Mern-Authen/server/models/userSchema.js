const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Schema/ Document Structure here

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type: String,
        required : true
    },
    token : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

// Hashing Password to Secure Below - use notes
 userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
 })


 //Generate Tokens to Verify User
 userSchema.methods.generateToken = async function() {
    try {
        let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this,tokens.concat({token : generatedToken})
        await this.save();
        return generatedToken;
    } catch (error){
        console.log(error);
    }
}


//Create Model
const Users = new mongoose.model("USER", userSchema)

module.exports = Users;