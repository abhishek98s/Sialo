import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

dotenv.config();


const app = express();

app.use(express.json())

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(cors({
//     origin: '*'
// }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})

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