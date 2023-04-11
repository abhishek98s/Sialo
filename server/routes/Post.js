import express from 'express'
import upload from '../uploads/upload.js';

// Controllers
import { createPost, getPost } from '../controller/Post.js'


let app = express();


app.post('/post', upload.single('image'), createPost)
app.get('/post', upload.single('image'), getPost)

export default app
