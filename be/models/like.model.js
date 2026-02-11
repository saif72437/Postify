import { model, Schema } from "mongoose";

const likeSchema = new Schema({
     post:{
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
     user:{
        type: Schema.Types.ObjectId,
        ref: "like",
        required: true
    },
}, {timestamps: true})

export const Like = model("Like", likeSchema)