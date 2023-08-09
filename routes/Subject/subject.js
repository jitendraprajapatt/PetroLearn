const express = require("express") ;
const subjectRouter = express.Router() ;
const {getSubjects , postSubjects}  =  require('../../controller/Subject/subject') ;



subjectRouter.get('/study/get/subject' , getSubjects) ;
subjectRouter.post('/study/add/subject' , postSubjects) ;


module.exports = subjectRouter ;
