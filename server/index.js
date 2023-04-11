import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})

const PORT = process.env.PORT;

// Configuring the database
try {
    mongoose.connect(process.env.MONGO_URI, console.log("DB connected sucessfully"));
} catch (error) {
    console.log(error)
}

import userRoute from './routes/User.js';
import postRoute from './routes/Post.js';

app.use('/api', userRoute);
app.use('/api', postRoute);

app.listen(PORT, console.log(`Server running and listning on PORT:${PORT}`))