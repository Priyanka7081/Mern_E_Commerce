import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js';
import productRouter from './Routes/Product.js'

const app = express();

app.use(bodyParser.json())

// home testing route
app.get('/',(req,res)=>res.json({message:'This is home rout'}))

// user Router
app.use('/api/user',userRouter)

// product router
app.use('/api/product',productRouter)

mongoose.connect(
    "mongodb+srv://priyankau7081:7RmbcOWlvmryZy4O@cluster0.c2zldrb.mongodb.net/",{
        dbName:"MERN_E_Commerce"
    }
).then(()=>console.log("mongoDB Connected Successfully...")).catch((err)=>console.log(err));

const port = 1000;

app.listen(port,()=>console.log(`Server is running on port ${port}`))