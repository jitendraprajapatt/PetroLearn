const express = require("express") ;
const app = express() ;
const mongoose  = require("mongoose") ;
const cors = require("cors");
const subjectRouter = require('./routes/Subject/subject');
const topicRouter = require('./routes/Topics/topics');
const userRouter = require('./routes/LoginAndRegistor/user')
const bodyParser = require("body-parser");
const dotenv = require('dotenv') ;
const cookieParser = require("cookie-parser");
dotenv.config() ;

app.use(express.json());

app.use(bodyParser.json({ limit: '1gb' }));
app.use(cors()) ;
app.use(cookieParser())

app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Headers","*");
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});
// create mongodb connection 

async function mongodb() {
 await mongoose.connect(process.env.MONGODB_DATABASE).then(() =>{
    console.log("database connect successfully !") ;
  }).catch((e) =>{
  console.log(e);
  }) 

}
   
try{
  mongodb() ;
}catch (e) {
  console.log(e) ;
}

//use all routes  
app.use('/api' , subjectRouter) ;
app.use('/api' , topicRouter) ;
app.use('/auth' , userRouter) ;


// start server at port 5000 
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=>{
    console.log(`express server is running at ${PORT}`) ;
})