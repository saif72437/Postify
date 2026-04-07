import { Router } from "express";
import { createComment, deleteComment, getComment } from "../controllers/comment.controller.js";

const commentRouter = Router()

commentRouter.post("/", createComment)
commentRouter.get("/post/:postId", getComment)
commentRouter.delete("/:id", deleteComment)

export default commentRouter