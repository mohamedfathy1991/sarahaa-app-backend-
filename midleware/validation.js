import Joi from"joi";

export const validate=(schema)=>{
      return(req,res,next)=>{
           let {error}= schema.validate({...req.body,...req.params},{abortEarly:false})
         
           if(!error) next()
           else{
            next (error)
           }


      }
}