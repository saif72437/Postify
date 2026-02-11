import { model, Schema } from "mongoose";

const bookmarkSchema = new Schema({
     user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
     post:{
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true
    },
}, {timestamps: true})

export const Bookmark = model("Bookmark", bookmarkSchema);
