import express from 'express'
// import upload from '../uploads/upload.js';
import upload from '../utils/multer.js';
// Controllers
import { createPost, addComment, getPost } from '../controller/Post.js'


let app = express();


app.post('/post', upload.single('image'), createPost)
app.get('/post', upload.single('image'), getPost)
app.patch('/comment/:id', addComment)

export default app
