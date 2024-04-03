const { user } = require("../../model/User/user");
const bcrypt = require('bcrypt')
const { generateToken, verifyToken } = require("../../Services/auth")
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
    let Token = "" ;
    const existUser = await user.findOne({ "Email": Email });
    
    if (existUser) {
        res.send("user already exist ")
    } else {
        if (Password === Re_password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(Password, salt);


            const newUser = new user({ Username, Email, Password, ImageUrl , Token });
            newUser.Password = hash;
           const tokenCredential = {
                id : newUser._id ,
                email : newUser.Email 
                
            }
            newUser.Token = generateToken(tokenCredential) ;
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
const postUserLogin = async (req, res) => {
   
    const email = req.body.email;
    const password = req.body.password;
    try {
        const existUser = await user.findOne({ "Email": email });

        if (!existUser) {
            return res.status(404).json({ message: 'User not found. Please register first!' });
        }

        const isPasswordValid = bcrypt.compareSync(password, existUser.Password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const getToken = existUser.Token ;
        const token = generateToken(getToken);

        if (token) {
            
            res.cookie('jwt' , token ,{httpOnly: true, secure:false}) ;
             res.status(200).json({ message: 'Successfully logged in !' , Token:token });
            
        } else {
             res.status(500).json({ message: 'Token fault !' });
        }
    } catch (error) {
        
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    postUserLogin
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