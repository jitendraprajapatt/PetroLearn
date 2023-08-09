const express = require("express") ;
const userRouter = express.Router() ;
const { getUser , postUserRegistration , getAdmin ,postAdminRegistration , postUserLogin } = require('../../controller/User/user');

// user routes 
userRouter.get('/get/user' , getUser)
userRouter.get('/get/admin' , getAdmin)


userRouter.post('/user/registration' , postUserRegistration)
userRouter.post('/user/login' , postUserLogin)
userRouter.post('/admin/registration' , postAdminRegistration)


module.exports =  userRouter ;