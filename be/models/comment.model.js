import { model, Schema } from "mongoose";

const commentSchema = new Schema({
    post:{
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text:{
        type: String,
        required: true
    }
}, {timestamps: true})

export const Comment = model("Comment", commentSchema)

