import express from 'express'
import upload from '../uploads/upload.js';

// Controllers
import { login, register } from '../controller/Auth.js'

let app = express();


app.post('/register', upload.single('image'), register)
app.post('/login', login);


export default app
