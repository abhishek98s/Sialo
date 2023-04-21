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
            caption,
            img,
            comments
        } = req.body

        const uploadCloudinary = await cloudinary.uploader.upload(req.file.path);

        let post = new Post({
            caption: caption,
            img: uploadCloudinary.secure_url
        })
        
        await post.save();
        let posts = await Post.find({});
        res.status(200).json({ data: posts })

    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
}