const express = require('express');
require('dotenv').config();
const port     =  process.env.PORT ;
//const helmet   =  require('helmet');
//const cors     =  require('cors');
require('./DB/connection');
const app      =  express();

const { taskRoute } =  require('./Route/task.route');


//some usefull middlewares

app.use(express.json({ limit: '10mb'}));
//app.use(cors({origin: *}));
//app.use(helmet());

//routes 
app.use('/task' , taskRoute);


app.get('/' , (req, res)=> {
      res.status(200).send("Work Successfull");
})




app.listen(port , ()=> console.log("App is runing on port " + port ));