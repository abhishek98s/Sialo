import asyncWrapper from '../middleware/async.js';
import User from '../model/User.js';
import cloudinary from '../utils/cloudinary.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const passwordHash = asyncWrapper(async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
})

export const uploadToCloudinary = asyncWrapper(async (filePath) => {
    const uploaded = await cloudinary.uploader.upload(filePath);

    return uploaded;
})

export const findUser = async (email) => {
    const user = await User.findOne({ email: email });
    if (!user) throw new Error('User doesnot exist');

    return user;
}

export const isMatchingPassword = async (password, user) => {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid crediantials.");

    return
}

export const generateToken = async (firstName, secret) => {
    const token = jwt.sign({ id: firstName }, secret);

    return token;
}