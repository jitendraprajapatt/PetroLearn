const express  = require('express'); 
const topicRouter = express.Router() ;
const {getHeadingList , getHeadingListTopics , postHeadingWithTopics} = require('../../controller/Topic/topic');
const { verifyToken  } = require('../../Services/auth');

const check = (req , res , next) =>{
    const jwt= req.cookies.jwt ;
    console.log(jwt)
     next() ;
}

// get request
topicRouter.get('/subject/heading/List' , getHeadingList) ;
topicRouter.get('/subject/heading/List/topics' ,check, getHeadingListTopics) ;

// Post request

topicRouter.post('/subject/topics/post' ,postHeadingWithTopics) ;

module.exports = topicRouter ;