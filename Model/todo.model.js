const mongoose =  require('mongoose');


let statusEnum  =  ['pending' , 'completed' , 'fail'];

const todoSchema =  new mongoose.Schema({
      task: {
         type: String  , 
          required: true , 
          }, 
       description : {
        type: String  , 
        required: false  , 
       },     
       deadline: {
         type: Date , 
         required: false ,
       }   ,  
       status : {
          type : String , 
          required : false  , 
          enum : statusEnum ,
          default : 'pending'
       }
});

todoSchema.set('timestamps' , true );


const Task =  mongoose.model('tasks' , todoSchema);

module.exports = {
     Task  ,
}