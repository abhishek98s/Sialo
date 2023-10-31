import express from 'express'
// import upload from '../uploads/upload.js';
import upload from '../utils/multer.js';
// Controllers
import { createPostHandler, addCommentHandler, getAllPostHandler, getUserPostsHandler } from '../controller/Post.js'


let app = express();

app.post('/post', upload.single('image'), createPostHandler); // create a post

app.get('/post', getAllPostHandler);  // get ALl the Posts

app.get('/post/:userId', getUserPostsHandler);  // get posts of a specific user

app.patch('/comment/:postId', addCommentHandler);  // add comment to a post

export default app;