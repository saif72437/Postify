import express from 'express';
import userRouter from './routes/user.route.js';
const app = express();


// 

app.use("/user/", userRouter)

app.listen(3000, ()=>{
    console.log("APP IS LISTINING ON PORT 3000");
    
})