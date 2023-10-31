import Post from "../model/Post.js";
import sharp from 'sharp'



export const getAllPost = async (req, res) => {
    let posts = await Post.find({});

    return posts;
}

export const createPost = async (postDetails) => {
    const {
        userId,
        firstName,
        lastName,
        userPicturePath,
        caption,
    } = postDetails

    const imagePath = req.file.path;

    //Compres the image
    const compressedImagePath = imagePath + '.compressed.jpg';
    await sharp(imagePath).jpeg({ quality: 80 }).toFile(compressedImagePath);


    const folder = 'Sialo';
    let imgUrl = await cloudinary.uploader.upload(compressedImagePath, {
        resource_type: 'image',
        folder: folder
    })

    let post = new Post({
        userId,
        firstName,
        lastName,
        userPicturePath,
        caption,
        img: imgUrl.secure_url
    })

    let userPost = await post.save();
}

export const addPostComments = async (postId, commentInfo) => {

    const {
        userId,
        firstName,
        lastName,
        userPicturePath,
        comment,
    } = commentInfo;

    const upadatedPost = await Post.findOneAndUpdate(
        { _id: postId.userId },
        {
            $push: {
                comments: {
                    userId,
                    firstName,
                    lastName,
                    userImg: userPicturePath,
                    comment
                }
            }
        },
        { new: true }
    )

    return upadatedPost;
}


export const getUserPosts = async (userId) => {
    const userPosts = await Post.find({ userId: userId });

    if(!userPosts) throw Error("User doesnot exits")

    return userPosts;
}