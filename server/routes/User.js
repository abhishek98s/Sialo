import express from 'express'
import upload from '../utils/multer.js';

// Controllers
import { loginHandler, registerHandler } from '../controller/Auth.js'
import { getAllUser, getUser } from '../controller/Users.js';

let app = express();


app.post('/register', upload.single('image'), registerHandler)
app.post('/login', loginHandler);
app.get('/user/:id', getUser);
app.get('/user', getAllUser)


export default app
