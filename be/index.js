import express from 'express';
import { signup } from './controllers/auth.controller.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
const app = express();



app.use("/api/v1/auth", authRouter) 
app.use("/api/v1/users", userRouter) 


app.listen(3000, ()=>{
    console.log("APP IS LISTINING ON PORT 3000");
    
})