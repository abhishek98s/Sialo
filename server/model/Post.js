import mongoose from "mongoose";

export const postSchema = mongoose.Schema(
    {
        caption: {
            type: String,
            required: true
        },
        img: {
            data: Buffer,
            contentType: String
        },
        comments: {
            type: Array,
            default: []
        }
    },{
        timestamps: true
    })

const Post = mongoose.model("Post", postSchema);

export default Post;