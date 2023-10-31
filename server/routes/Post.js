import express from 'express'
// import upload from '../uploads/upload.js';
import upload from '../utils/multer.js';
// Controllers
import { createPost, addCommentHandler, getPost, getUserPostsHandler } from '../controller/Post.js'


let app = express();


app.post('/post', upload.single('image'), createPost); // create a post

app.get('/post', getPost);  // get ALl the Posts

app.get('/post/:userId', getUserPostsHandler);  // get posts of a specific user

app.patch('/comment/:postId', addCommentHandler);  // add comment to a post

export default app;
