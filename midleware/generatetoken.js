
import  Jwt  from "jsonwebtoken"
import { AppErr } from "./catcherr.js"
export const generatToken=(load)=>{
      let token = Jwt.sign(load,'omar fathy secret')
      return token

}
export const verifyToken=(req,res,next)=>{
      let {token}= req.headers
      let load = Jwt.verify(token,'omar fathy secret')
      if (!load ) return next(new AppErr('please verfy token',403))
      req.user = load
      next()
}