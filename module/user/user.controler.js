

import bcrypt from "bcrypt"
import { User } from "../../database/model/user.model.js"
import { AppErr, errhandle } from "../../midleware/catcherr.js"
import { sendmail } from "../../midleware/mail.js"
import { generateopt } from "../../midleware/opt.js"
import { generatToken } from "../../midleware/generatetoken.js"

export const signup=   ( async (req,res,next)=>{
      let {email,password}= req.body

      
      let checkuser= await User.findOne({email})
      if (checkuser) return next(new AppErr('email is used',409)) 
      
      // add user n
      let user=   new User(req.body)
      user.password= await bcrypt.hash(password,10)
      let opt =  generateopt(1000,10000)

      user.opt=  opt 
      user.optExpaire=  new Date(Date.now() + 5*60*1000 )
      ;
      await user.save()
   
      // send email
       await  sendmail(user.email,user.name,user.opt)

      
      res.json({message:"success pls comfirm email" })
})
export const verfyemail=async(req,res,next)=>{
      let {email,otp}= req.body
      let user= await User.findOne({email})
      
      if (!user) return next(new AppErr('user not found',403))
      
      if (user.opt != otp) return next(new AppErr('opt is wrong',403))
      if( user.optExpaire < (new Date(Date.now())))return next(new AppErr('otp is expired'))
      user.confirm= true
      user.opt= undefined
      await user.save()
      res.json({message:"success  email confirmee" })


      

}
export const sinin=async(req,res,next)=>{
      let {email,password}= req.body
      let user= await User.findOne({email})
      if (!user) return next(new AppErr('user not found',404))
      if (!user.confirm) return next(new AppErr('email not verified',403))
      let checkpassword=bcrypt.compareSync(password,user.password)
      if (!checkpassword) return next(new AppErr('password is wrong',403))

let token= generatToken({ email: user.email, name: user.name, id: user._id })
res.json({token, message: "success" })

      

}