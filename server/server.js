import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json())

const corsOptions = {
    // origin: 'http://localhost:3000',
    origin: 'https://sialo.vercel.app',
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",      //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// app.use(function (req, res, next) {
//     // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Origin', 'https://sialo.vercel.app');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// })

app.use(express.json({limit: '50mb'}));

const PORT = process.env.PORT || 3000;

// Configuring the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

import userRoute from './routes/User.js';
import postRoute from './routes/Post.js';

app.get('/', (req, res) => {
    res.status(200).json({
        message: "sialo social media app"
    });
})

app.use('/api', userRoute);
app.use('/api', postRoute);

connectDB().then(() => {
    app.listen(PORT, console.log(`Server running and listning on PORT:${PORT}`))

})