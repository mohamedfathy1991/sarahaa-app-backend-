 
 import { Router } from "express";
import {  validate } from "../../midleware/validation.js";
import { emailConfirmedVal, signin, sinupvalidation } from "./userValidation.js";
import { signup, sinin, verfyemail } from "./user.controler.js";
import { errhandle } from "../../midleware/catcherr.js";


 const userRoute= Router()

 
 userRoute.post('/sinup',validate(sinupvalidation),errhandle(signup))
 userRoute.post('/verfiy',validate(emailConfirmedVal),errhandle(verfyemail))
 userRoute.post('/sinin',validate(signin),errhandle(sinin))



 export default userRoute