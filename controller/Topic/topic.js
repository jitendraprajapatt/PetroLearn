const { headingList, topicsData } = require('../../model/Topics/topic');

// Get heading list
const getHeadingList = async (req, res) => {
    try {
        const headingListData = await headingList.find();
        res.status(200).json(headingListData);
    } catch (error) {
        console.error('Error fetching heading list:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get topic data
const getTopicsData = async (req, res) => {
    try {
        const getData = await topicsData.find();
        res.status(200).json(getData);
    } catch (error) {
        console.error('Error fetching topic data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Post topic data
const postHeadingWithTopics = async (req, res) => {
    // Implementation for posting heading with topics
};

// Create new topic post
const newPost = async (req, res) => {
   const [data] = req.body;
   
    if(typeof(data) == "undefined"){
        
        res.send("Please first click on check then submit")
    }
    else{
        if(data.title == ""){
        res.send({message : "add title !"}) ;
        }else{
 try {
       
        // Create new heading for the topic
        const newHeading = new headingList({
            title : data.title,
            subjectName: data.header.sName,
            SID : data.header.SID
        });
        await newHeading.save();

        // Create new topic data

        const newTopicData = new topicsData(data);
        newTopicData.header.TID = newHeading._id;
        await newTopicData.save();

        res.status(201).send('New topic data saved!');
    } catch (error) {
        console.error('Error creating new topic post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
        }
    }
  
};

module.exports = { getHeadingList, getTopicsData, postHeadingWithTopics, newPost };
