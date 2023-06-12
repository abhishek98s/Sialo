import express from 'express'
import cors from 'cors'
// import upload from '../uploads/upload.js';
import upload from '../utils/multer.js';
// Controllers
import { createPost, addComment, getPost, getUserPosts } from '../controller/Post.js'


var corsOptions = {
    origin: 'https://sialo.vercel.app',
};

let app = express();


app.post('/post', cors(corsOptions), upload.single('image'), createPost); // create a post

app.get('/post', upload.single('image'), getPost);  // get ALl the Posts

app.get('/post/:userId', getUserPosts);  // get posts of a specific user

app.patch('/comment/:postId', addComment);  // add comment to a post

export default app;
