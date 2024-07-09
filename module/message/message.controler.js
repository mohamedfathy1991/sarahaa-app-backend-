import { MessageModel } from "../../database/model/message.model.js"

export const addmessage=async(req,res,next)=>{
      let{ reciverid,message}=req.body
      
      await MessageModel.create({reciverid,message})
      res.status(201).json({message:"message sent successfully"})


     
}
export const deleteMessage=async(req,res,next)=>{
      let{  id }=req.params

      
    await MessageModel.findByIdAndDelete(id)
    res.status(200).json({message:"message deleted successfully"})
     
     
}
export const getmessage=async(req,res,next)=>{
      let{  id }=req.user
      
    let message= await MessageModel.find({reciverid:id})
 
    if (message.length > 0){
      return  res.status(200).json({message})

    } 
      return res.status(200).json({message:"no message found "})
     
     
}