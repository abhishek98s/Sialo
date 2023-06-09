import Post from '../model/Post.js'
import fs from 'fs'
import path from 'path'
import cloudinary from '../utils/cloudinary.js'
import User from '../model/User.js'
import sharp from 'sharp'


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
        
        const imagePath = req.file.path;


        sharp(imagePath)
            .jpeg({ quality: 80 })
            .toFile(imagePath + '.compressed.jpg')
            .then(async () => {
                const folder = 'Sialo'; // Replace 'your-folder' with the desired folder name in Cloudinary

                let uploadCloudinary = await cloudinary.uploader.upload(imagePath + '.compressed.jpg', {
                    resource_type: 'image',
                    folder: folder
                })

                let post = new Post({
                    userId: userId,
                    firstName: firstName,
                    lastName: lastName,
                    userPicturePath: userPicturePath,
                    caption: caption,
                    img: uploadCloudinary.secure_url
                })

                let userPost = await post.save();
                console.log(userPost)

                res.status(200).json({ data: userPost })
            })
            .catch(err => {
                console.error('Error compressing image:', err);
                res.sendStatus(500);
            });

    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
}

export const getUserPosts = async (req, res) => {
    try {

        const { userId } = req.params;

        const userPosts = await Post.find({ userId: userId })

        res.status(200).json({ data: userPosts })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const addComment = async (req, res) => {
    try {
        const { postId } = req.params;

        const {
            userId,
            firstName,
            lastName,
            userPicturePath,

            comment,
        } = req.body

        const post = await Post.findOne({ _id: postId });

        // post.comments = []
        // await post.save()

        await post.comments.push(
            {
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                userImg: userPicturePath,
                comment: comment
            })


        await Post.updateOne({ _id: postId },
            {
                $set: {
                    comments: post.comments
                }
            })

        res.status(200).json({ data: post })

    } catch (err) {
        console.log(err);
        res.send({ msg: err })
    }

}