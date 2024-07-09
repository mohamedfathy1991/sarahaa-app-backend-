
import express from 'express'
import './database/dbconection.js'
import userRoute from './module/user/user.routes.js'
import globalerror from './midleware/globalerror.js'
import { AppErr } from './midleware/catcherr.js'
import messageRoute from './module/message/message.routes.js'
const app = express()
const port = 3000

app.use(express.json())

app.use('/auth',userRoute)
app.use('/message',messageRoute)



app.use('*',(req,res,next)=>{
      next(new AppErr('page not found !!!',404))
})

app.use(globalerror)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))