import { loginUser, registerUser } from "../service/authServices.js";
import asyncWrapper from "../middleware/async.js";

export const register = asyncWrapper(async (req, res, next) => {
    const imgPath = req.file.path;
    const savedUser = await registerUser(req.body, imgPath);
    
    res.status(201).json(savedUser)
})

export const login = asyncWrapper(async (req, res) => {
    const userToken = await loginUser(req, res);
    const { token, user } = userToken;

    res.status(200).json({ token, user });
})