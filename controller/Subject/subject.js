const subjectSchema = require('../../model/Subject/subject');

// Get subject data from database 
//api address  = api/study/fetch/subject 
const getSubjects =async (req ,res)=>{
  const getSubjects = await subjectSchema.find() ;
 res.json(getSubjects) ;

} ;



const deleteSubjects =async (req ,res)=>{
const {subjectName} = req.body ;
const fetchSubject = await subjectSchema.find({Name : subjectName})
const [fetchName] = fetchSubject ;

if(fetchName.Name == subjectName){
    try {
      subjectSchema.deleteOne({Name : fetchName.Name}).then(()=>{
        res.send({message : "item deleted "})
      })
      
    } catch (error) {
      res.sand({error : "deletion in error = " + error})
    }
}else{
  res.send({message : "subject not found !"})
}
} ;

// Put subject data into database 
//api address  = api/study/add/subject 
const postSubjects = async(req ,res)=>{
 const { subjectName , image } = req.body ;
 const subjectData = {
  Name  : subjectName,
  Image : image
 }
 const newSubject = new subjectSchema(subjectData) ;
 await newSubject.save().then(()=>{ res.send(' new subject is created !')}).catch(e=>console.log(e));

} ;

module.exports = {getSubjects , postSubjects , deleteSubjects}