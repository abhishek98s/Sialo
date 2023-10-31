import { loginUser, registerUser } from "../service/authServices.js";
import asyncWrapper from "../middleware/async.js";

export const registerHandler = asyncWrapper(async (req, res, next) => {
    const imgPath = req.file.path;
    const savedUser = await registerUser(req.body, imgPath);
    
    res.status(201).json(savedUser)
})

export const loginHandler = asyncWrapper(async (req, res) => {
    const userToken = await loginUser(req.body);
    const { token, user } = userToken;

    res.status(200).json({ token, user });
})