import express from "express";
import {connectToDatabase} from "./db/database.js";
import cors from 'cors'
import authrouter from './routes/authRouter.js'
import Gigrouter from "./routes/gigRoute.js";
import userRouter from "./routes/userRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cookieParser from "cookie-parser";

const app=express()

app.use(cors(
    { origin: "http://localhost:5173",
    credentials: true 
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authrouter)
app.use('/api/gigs', Gigrouter)
app.use('/api/user', userRouter)
app.use('/api/review', reviewRouter)
app.use('/api/orders', orderRouter)

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'something wrong'

    return res.status(errorStatus).send(errorMessage)
})



app.listen(500, ()=>{
    connectToDatabase()
    console.log("server is running")
})

