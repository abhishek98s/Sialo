import mongoose from "mongoose";

export const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userPicturePath: {
            type: String,
            required: true,
        },

        caption: {
            type: String,
            required: true
        },
        img: {
            type: String,
        },
        likes: {
            type: String,
        },
        comments: {
            type: Array,
            default: []
        }
    }, {
    timestamps: true
})

const Post = mongoose.model("Post", postSchema);

export default Post;
