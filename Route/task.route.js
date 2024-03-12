const express     =  require('express');
const taskRoute   =  express.Router();


const  { getAllTask , storemanyTask , storeTask  , deleteTask ,updateTask , getTask} 
 =  require('../Controller/task.controller');
 const { validateTask  , validateTaskOnUpdate}  = require('../Middleware/taskValidator.middleware');



taskRoute.get('/' , getAllTask);
taskRoute.post('/store' , validateTask  ,storeTask);  
taskRoute.post('/storemany'  , storemanyTask); // store many 
taskRoute.get('/get/:id'  , getTask);
taskRoute.get('/delete/:id'  , deleteTask);
taskRoute.put('/update/:id' , validateTaskOnUpdate   ,updateTask);


module.exports =  {
    taskRoute ,
};