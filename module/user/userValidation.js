import Joi from "joi";



 export const sinupvalidation=  Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(3),
})
 export const emailConfirmedVal=  Joi.object({
      email: Joi.string().email().required(),
      otp: Joi.number().required().min(3),
})


export const signin= Joi.object({
    
      email:Joi.string().email().required('oppps enter email'),
      password:Joi.string()
      .min(3).message('enter min 3').required('enter passworde')
      
      })