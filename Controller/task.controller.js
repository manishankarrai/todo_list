const {  Task  } = require('../Model/todo.model');
const {  resFormat  }  =  require('../Service/helper.service');



const getAllTask = async(req, res)=> {
    try{
       let data  =  await Task.find();
       let response  =  resFormat(true , data ) ;
       res.status(200).send(response);

    } catch(error) {
        let response  =  resFormat(false , [] , error.message  , 1) ;
       res.status(500).send(response);  
    }
        
} 
const getTask = async(req, res)=> {
    try{
       let id    =  req.params.id ;
       console.log("id is  ", id);
       let data  =  await Task.find({ _id: id });
       let response  =  resFormat(true , data ) ;
       res.status(200).send(response);

    } catch(error) {
        let response  =  resFormat(false , [] , error.message  , 1) ;
       res.status(500).send(response);  
    }
        
} 

const storeTask  =  async(req, res)=> {
    try{
         let obj =  {
            task         : req.body.task  , 
            description  : req.body.description  , 
            deadline     : req.body.deadline , 
            status       : req.body.status ,
         }
      
       let task      =  new Task(obj) ; 
       let data      =  await task.save();

       let response  =  resFormat(true , data ) ;
       
       res.status(200).send(response);

    } catch(error) {

       

        let response  =  resFormat(false ,[] , error.message , 1) ;
         res.status(500).send(response);  
    }
}
const storemanyTask = async (req, res) => {
    try {
        let arrayData = [];
        for (let bodyData of req.body) {
            let obj = {
                task: bodyData.task,
                description: bodyData.description,
                deadline: bodyData.deadline,
                status: bodyData.status,
            };
            arrayData.push(obj);
        }

        let data = await Task.insertMany(arrayData);

        let response = resFormat(true, data);

        res.status(200).send(response);

    } catch (error) {
        
        let response = resFormat(false, [], error.message, 1);
        res.status(500).send(response);
    }
};


const deleteTask = async(req, res)=> {
    try{
         let id =  req.params.id ;
        console.log("id is ", id);
       const data = await Task.deleteOne({  _id : id });

    
       
       let response  =  resFormat(true , data ) ;
       res.status(200).send(response);

    } catch(error) {

      
        let response  =  resFormat(false , [] , error.message  , 1) ;
       res.status(500).send(response);  
    }
        
} 

const updateTask = async(req, res)=> {
    try{
         let id =  req.params.id ;
        console.log("id is ", id);
        let obj =  {
            task         : req.body.task  , 
            description  : req.body.description  , 
            deadline     : req.body.deadline , 
            status       : req.body.status ,
        }
       const data = await Task.updateOne({  _id : id } , { $set: obj } );

     
        console.log(data);
       let response  =  resFormat(true , data ) ;
       res.status(200).send(response);

    } catch(error) {
       
        let response  =  resFormat(false , [] , error.message  , 1) ;

        res.status(500).send(response);  
    }     
} 



module.exports = {
     getAllTask , storeTask , deleteTask , storemanyTask , updateTask , getTask 
}