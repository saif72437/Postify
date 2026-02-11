import { model, Schema } from "mongoose";

const passwordResetTokenSchema = new Schema({
     user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tokenHash:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,
        required: true,
    },
    used:{
        type: Boolean,
        default: false
    },


}, {timestamps: true})

export const PasswordResetToken = model("PasswordResetToken", passwordResetTokenSchema);
