function resFormat( success  , val = [], message = '' , error = 0 ){
    let obj  = {
        success : success , 
        error : error  , 
        message: message  , 
        data  : val  
    }
    return obj  ;
}



module.exports =  {
    resFormat ,
}