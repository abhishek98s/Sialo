import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'

import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import connectDB from './db/connect.js';
import userRoute from './routes/User.js';
import postRoute from './routes/Post.js';

dotenv.config();

const app = express();
app.use(express.json())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://sialo.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})

app.get('/', (req, res) => {
    res.status(200).json({
        message: "sialo social media app"
    });
})

app.use('/api', userRoute);
app.use('/api', postRoute);
app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server running and listning on PORT:${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start();