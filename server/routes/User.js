import express from 'express'
import upload from '../uploads/upload.js';

// Controllers
import { register } from '../controller/Auth.js'

let app = express();


app.post('/register', upload.single('image'), register)

export default app
