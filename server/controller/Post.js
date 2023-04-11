import Post from '../model/Post.js'
import fs from 'fs'
import path from 'path'

// Get all the post
export const getPost = async (req, res) => {
    try {
        let posts = await Post.find({});
        res.send({
            data: posts
        })
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

        let post = new Post({
            caption: caption,
            img: {
                data: fs.readFileSync(path.join('./uploads/' + req.file.filename)),
                contentType: 'image/png',
            }
        })

        let savedPost = await post.save();

        res.json({
            message: "sucess"
        })
    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
}