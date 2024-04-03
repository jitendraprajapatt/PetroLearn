const express  = require('express'); 
const topicRouter = express.Router() ;
const {getHeadingList , getTopicsData , postHeadingWithTopics , newPost} = require('../../controller/Topic/topic');
const { verifyToken  } = require('../../Services/auth');

const check = (req , res , next) =>{
    const jwt= req.cookies.jwt ;
    console.log(jwt)
     next() ;
}

// get request
topicRouter.get('/subject/heading/List' , getHeadingList) ;
topicRouter.get('/subject/heading/List/topics' , getTopicsData) ;

// Post request

topicRouter.post('/subject/topics/post' ,postHeadingWithTopics) ;
topicRouter.post('/subject/topics/newPost' ,newPost) ;

module.exports = topicRouter ;