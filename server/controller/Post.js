import Post from '../model/Post.js'
import fs from 'fs'
import path from 'path'
import cloudinary from '../utils/cloudinary.js'


// Get all the post
export const getPost = async (req, res) => {
    try {
        let posts = await Post.find({});
        res.status(200).json({ data: posts })

    } catch (err) {
        console.log(err);
        res.json({
            message: "sth worong"
        })
    }
}


// Save the post
export const createPost = async (req, res) => {
    try {
        const {
            userId,
            firstName,
            lastName,
            userPicturePath,

            caption,
        } = req.body

        const uploadCloudinary = await cloudinary.uploader.upload(req.file.path);

        let post = new Post({
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            userPicturePath: userPicturePath,

            caption: caption,
            img: uploadCloudinary.secure_url
        })

        let userPost = await post.save();

        res.status(200).json({ data: userPost })

    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
}