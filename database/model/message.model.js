
import { Schema,model } from "mongoose";

const messageschema = new Schema({
      message: String,
      reciverid:{
            type: Schema.Types.ObjectId,
            ref:'User'
      }


           
},{timestamps:true});
// Compile model from schema
export const  MessageModel = model('Message', messageschema );