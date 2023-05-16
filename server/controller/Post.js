import Post from '../model/Post.js'
import fs from 'fs'
import path from 'path'
import cloudinary from '../utils/cloudinary.js'
import User from '../model/User.js'


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

        const uploadCloudinary = await cloudinary.uploader.upload(req.file.path, { folder: 'Sialo' });

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


export const addComment = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            userId,
            firstName,
            lastName,
            userPicturePath,

            comment,
        } = req.body

        const post = await Post.findOne({ userId: id })

        await post.comments.push(
            {
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                userImg: userPicturePath,
                comment: comment
            })

        console.log(post.comments)

        let updatedPost = await Post.updateOne({ userId: id },
            {
                $set: {
                    comments: post.comments
                }
            })

        res.status(200).json({ data: updatedPost })

    } catch (err) {
        console.log(err);
        res.send({ msg: err })
    }

}