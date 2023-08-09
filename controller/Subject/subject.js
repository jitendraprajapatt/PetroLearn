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
  const PostSubject = new subjectSchema(req.body) ;
  await PostSubject.save().then(()=>{
    res.json({message : "Data saved !" , statusCode : 200}) ;
 }).catch(e=>{
    console.log(e) ;
 }) ;
} ;

module.exports = {getSubjects , postSubjects}