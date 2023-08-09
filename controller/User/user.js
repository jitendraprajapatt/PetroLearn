const { user, userView, admin, adminView } = require("../../model/User/user");
const bcrypt = require('bcrypt')

// < ------ POST REQUESTS ----------- >


const postAdminRegistration = (req, res) => {
    res.send("postAdmin ok")
};


const postUserRegistration = async (req, res) => {

    let Username = req.body.username;
    let Email = req.body.email;
    let Password = req.body.password;
    let Re_password = req.body.re_password;
    let ImageUrl = req.body.profile;
    const existUser = await user.findOne({ "Email": Email });
    console.log(existUser)
    if (existUser) {
        res.send("user already exist ")
    } else {
        if (Password === Re_password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(Password, salt);
            
            
           const  newUser = new user({ Username, Email ,Password, ImageUrl });
           newUser.Password = hash ;
            const result = await newUser.save();
            if (result) {
              res.status(200).send("User saved !")
            } else {
                res.send("New user not saved  !")
              
            }
        } else {
            res.send("Incorrect password OR Not matched !")
        }
    }


};




// <---------------------------------------------------------------------------------------------------------->

//  < ------- GET REQUESTS ---------- >
const getUser = (req, res) => {
    res.send("getUser ok")
};


const getAdmin = (req, res) => {
    res.send("getAdmin ok")
};

// < ---------------------------------------------------------------------------------------------------------->



// <----- Login Request ----- >
const postUserLogin= async (req, res) => {

   
    let Email = req.body.email;
    let Password = req.body.password;
  
    const existUser = await user.findOne({ "Email": Email });
   
    if (existUser) {
        const checkPassword = bcrypt.compareSync(Password, existUser.Password);
        if(checkPassword){
            res.status(200).send("User logged in !")
           
          
        }else{
            res.send("incorrect password")
        }
    } else {

        res.send("User not found Please registration first !")
    }

};



// <----------------------------------------------------------------------------------------------------------->

//  <--------- EXPORTS ALL MODULE --------- >

module.exports = {
    getUser,
    postUserRegistration,
    getAdmin,
    postAdminRegistration,
    postUserLogin
}