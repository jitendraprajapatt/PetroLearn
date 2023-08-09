const mongoose = require("mongoose");

// schema for user 

const userSchema = new mongoose.Schema({
    Username: { type: String, require: true },
    Email: { type: String, require: true },
    Password: { type: String, require: true },
    ImageUrl: { type: String }
}, { timestamps: true }) ;

//user view schema 
const userViewSchema = new mongoose.Schema({
    Username: { type: String, require: true },
    Email: { type: String, require: true },
    ImageUrl: { type: String }
}, { timestamps: true }) ;


// schema for admin 
const adminSchema = new mongoose.Schema({
    Username: { type: String, require: true },
    Email: { type: String, require: true },
    Password: { type: String, require: true },
    ImageUrl: { type: String },
    UserType: { type: String, require: true },
    Education: {
        College: { type: String },
        Branch: { type: String },
        About: { type: String, require: true },
    },
    Link: {
        Instagram: { type: String },
        Linkedin: { type: String },
        Youtube: { type: String },
        Twitter: { type: String }
    }

}, { timestamps: true });
// for about page 
const adminViewSchema = new mongoose.Schema({
    Username: { type: String, require: true },
    Email: { type: String, require: true },
    ImageUrl: { type: String },
    UserType: { type: String, require: true },

    Education: {
        College: { type: String },
        Branch: { type: String },
        About: { type: String, require: true },
    },

    Link: {
        Instagram: { type: String },
        Linkedin: { type: String },
        Youtube: { type: String },
        Twitter: { type: String }
    }
})
const user = mongoose.model("Client" , userSchema) ;
const userView = mongoose.model("ClientView" , userViewSchema) ;
const admin = mongoose.model("Admin" , adminSchema) ;
const adminView = mongoose.model("AdminView" , adminViewSchema) ;
module.exports = {user , userView , admin , adminView} ;