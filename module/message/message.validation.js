import Joi from "joi";



 export const messagevlaidation=  Joi.object({
      message: Joi.string().required(),
      reciverid: Joi.string().hex().length(24),
})

 export const messagevlaidationdelete=  Joi.object({
      id: Joi.string().hex().length(24),
})