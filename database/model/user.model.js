
import { Schema,model } from "mongoose";

const userschema = new Schema({
      name:{
            type:String,
            required:true
      },
      email:String,
      password:String,
      confirm:{
            type:Boolean,
            default:false
      },
      opt:String,
      optExpaire:Date
     

           
});
// Compile model from schema
export const  User = model('User', userschema );