const mongoose = require("mongoose");

// schema for user 

const userSchema = new mongoose.Schema({
    Username: { type: String, require: true },
    Email: { type: String, require: true },
    Password: { type: String, require: true },
    ImageUrl: { type: String },
    Token: { type: String }
}, { timestamps: true }) ;


const user = mongoose.model("Admin" , userSchema) ;

module.exports = {user } ;