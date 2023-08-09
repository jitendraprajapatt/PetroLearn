const express  = require('express'); 
const topicRouter = express.Router() ;
const {getHeadingList , getHeadingListTopics , postHeadingWithTopics} = require('../../controller/Topic/topic');
// get request
topicRouter.get('/subject/heading/List' , getHeadingList) ;
topicRouter.get('/subject/heading/List/topics' , getHeadingListTopics) ;

// Post request

topicRouter.post('/subject/topics/post' ,postHeadingWithTopics) ;

module.exports = topicRouter ;