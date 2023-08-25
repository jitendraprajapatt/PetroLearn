const subjectSchema = require('../../model/Subject/subject');

// Get subject data from database 
//api address  = api/study/fetch/subject 
const getSubjects =async (req ,res)=>{
  const getSubjects = await subjectSchema.find() ;
 res.json(getSubjects) ;

} ;

// Put subject data into database 
//api address  = api/study/add/subject 
const postSubjects = async(req ,res)=>{
 console.log(req.body)
} ;

module.exports = {getSubjects , postSubjects}