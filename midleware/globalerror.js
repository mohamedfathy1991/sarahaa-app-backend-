


 const  globalerr = (err,req,res,next)=>{
      const statuscode = err.statusCode||500
      res.status(statuscode).json({
            errorr:err.message,
            stack:err.stack.slice(0,200) ,
            code:statuscode
      })
      

      

}

export default globalerr