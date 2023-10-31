import asyncWrapper from "../middleware/async.js";
import Post from "../model/Post.js";

export const getAllPost = async (req, res) => {
    let posts = await Post.find({});

    return posts;
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