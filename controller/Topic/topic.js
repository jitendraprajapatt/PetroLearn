const {headingList , topicsData} = require('../../model/Topics/topic') ;

// get heading
const getHeadingList = async(req, res) => {
    const GetHeadingList =  await headingList.find() ;
    res.send(GetHeadingList) ;
};


// get topic data 
const getHeadingListTopics = async(req, res) => {
    const GetTopicsData =  await topicsData.find() ;
    res.send(GetTopicsData);
};

// post topic data
const postHeadingWithTopics = async (req, res) => {
const HObj = {
    Heading :req.body.Heading ,
SubjectName  : req.body.SubjectName ,
SID :req.body.SID 
}




const headingData = new headingList(HObj) ;
const NewData = new topicsData(req.body) ;
await headingData.save().then(async()=>{ 
    
    await NewData.save().then(()=>{ res.send(' New Topic data saved !')}).catch(e=>console.log(e));
    NewData.HID = headingData._id ;
    await NewData.save();
}).catch(e=>console.log(e));


 
};

module.exports = {getHeadingList , getHeadingListTopics , postHeadingWithTopics} ;