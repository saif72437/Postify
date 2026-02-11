import { model, Schema } from "mongoose";

const notificationSchema = new Schema({
    sender:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
    },
    receiver:{
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
    },
    notificationType: {
        type:String,
        required: true,
    },
    post:{
            type: Schema.Types.ObjectId,
            ref: "Post",
    },
    isRead:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export const Notification = model("Notification", notificationSchema)