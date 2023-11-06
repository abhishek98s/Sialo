import asyncWrapper from '../middleware/async.js'
import { addPostComments, createPost, getAllPost, getRequestedPosts, getUserPosts } from '../service/postServices.js'


// Get all the post
export const getAllPostHandler = asyncWrapper(async (req, res) => {
    let posts = await getAllPost();

    res.status(200).json({ data: posts })
})

// Save the post
export const createPostHandler = asyncWrapper(async (req, res) => {
    const imagePath = req.file.path;

    let userPost = await createPost(req.body, imagePath);

    res.status(200).json({ data: userPost });
})

export const getUserPostsHandler = asyncWrapper(async (req, res) => {
    const { userId } = req.params;

    const userPosts = await getUserPosts(userId);

    res.status(200).json({ data: userPosts })
})

export const addCommentHandler = asyncWrapper(async (req, res) => {
    const { postId } = req.params;

    const post = await addPostComments(postId, req.body);

    res.status(200).json({ data: post })
})

export const getRequestedPostsHandler = asyncWrapper(async (req, res) => {
    const { noofItems } = req.params;

    let posts = await getRequestedPosts(noofItems);

    res.status(200).json({ data: posts });
})