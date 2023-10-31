import express from 'express'
import upload from '../utils/multer.js';

// Controllers
import { loginHandler, registerHandler } from '../controller/Auth.js'
import { getAllUserHandler, getUserHandler } from '../controller/Users.js';

let app = express();

app.post('/register', upload.single('image'), registerHandler);
app.post('/login', loginHandler);
app.get('/user/:id', getUserHandler);
app.get('/user', getAllUserHandler);

export default app;
