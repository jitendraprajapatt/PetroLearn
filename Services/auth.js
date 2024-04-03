const jwt = require('jsonwebtoken')


function generateToken(user){
    const token  =  jwt.sign(
        {
            id : user.id ,
            email : user.email 
            
        }
        , process.env.SECRET_KEY_JWT
    );
    return token ;
} 
async function verifyToken(token){
    const flag = jwt.verify(token, process.env.SECRET_KEY_JWT) 
    return flag ;
}

module.exports = {
    generateToken ,
    verifyToken
}