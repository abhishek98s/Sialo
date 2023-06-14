import sharp from 'sharp'

import Post from '../model/Post.js'
import User from '../model/User.js'

import cloudinary from '../utils/cloudinary.js'
import asyncWrapper from '../middleware/async.js'


// Get all the post
export const getPost = asyncWrapper(async (req, res) => {
    let posts = await Post.find({});
    res.status(200).json({ data: posts })
})


// Save the post
export const createPost = asyncWrapper(async (req, res) => {
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

            res.status(200).json({ data: userPost })
        })
        .catch(err => {
            console.error('Error compressing image:', err);
            res.sendStatus(500);
        });
})

export const getUserPosts = asyncWrapper(async (req, res) => {
    const { userId } = req.params;

    const userPosts = await Post.find({ userId: userId })

    res.status(200).json({ data: userPosts })
})

export const addComment = asyncWrapper(async (req, res) => {

    const { postId } = req.params;

    const {
        userId,
        firstName,
        lastName,
        userPicturePath,

        comment,
    } = req.body

    const post = await Post.findOne({ _id: postId });
    
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
})