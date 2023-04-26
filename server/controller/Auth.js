import User from "../model/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import cloudinary from '../utils/cloudinary.js'

export const register = async (req, res) => {
    try {
        let {
            firstName,
            lastName,
            phoneNo,
            gender,
            email,
            password,

            img
        } = req.body


        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const uploadCloudinary = await cloudinary.uploader.upload(req.file.path);


        let newUser = await new User({
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            gender: gender,
            email: email,
            password: passwordHash,
            img: uploadCloudinary.secure_url
        })

        const savedUser = await newUser.save();

        res.status(201).json(savedUser)

    } catch (err) {
        console.log(err)
        res.json(err)
    }
}




export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User doesnot exist." })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid crediantials." });

        const token = jwt.sign({ id: user.firstName }, process.env.JWT_SECRET);
        user.password = null;
        res.status(200).json({ token, user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
