import express from "express";
import {connectToDatabase} from "./db/database.js";
import cors from 'cors'
import authrouter from './routes/authRouter.js'
import Gigrouter from "./routes/gigRoute.js";

const app=express()

app.use(cors(
    { origin: "http://localhost:5173",
    credentials: true 
}));

app.use(express.json());


app.use('/api/auth', authrouter)
app.use('/api/gig', Gigrouter)

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'something wrong'

    return res.status(errorStatus).send(errorMessage)
})



app.listen(500, ()=>{
    connectToDatabase()
    console.log("server is running")
})

//GDvBfphRGSC9zEgm
//mongodb+srv://ghulammujtaba1016:GDvBfphRGSC9zEgm@cluster0.yiecowc.mongodb.net/?retryWrites=true&w=majority