import mongoose from "mongoose";

export const postSchema = mongoose.Schema(
    {
        caption: {
            type: String,
            required: true
        },
        img: {
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
