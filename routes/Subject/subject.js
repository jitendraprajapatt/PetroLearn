const express = require("express") ;
const subjectRouter = express.Router() ;
const {getSubjects , postSubjects ,deleteSubjects}  =  require('../../controller/Subject/subject') ;



subjectRouter.get('/study/get/subject' , getSubjects) ;
subjectRouter.post('/study/add/subject' , postSubjects) ;
subjectRouter.post('/study/delete/subject' , deleteSubjects) ;

module.exports = subjectRouter ;
