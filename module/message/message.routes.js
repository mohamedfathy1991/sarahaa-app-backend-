import { Router } from "express";
import {  validate } from "../../midleware/validation.js";
import { errhandle } from "../../midleware/catcherr.js";
import { verifyToken } from "../../midleware/generatetoken.js";
import { addmessage, deleteMessage, getmessage } from "./message.controler.js";
import { messagevlaidation, messagevlaidationdelete } from "./message.validation.js";


 const messageRoute= Router()

 
 messageRoute.post('/add',validate(messagevlaidation)  ,errhandle(addmessage))
 messageRoute.get('/getall' , verifyToken ,errhandle(getmessage))
 messageRoute.delete('/delete/:id',validate(messagevlaidationdelete) , verifyToken ,errhandle(deleteMessage))



 export default messageRoute