import { Router } from "express";
import { like, unLike } from "../controllers/like.controller.js";
import {createBookmark, deleteBookmark, getAllBookmarks} from "../controllers/bookmark.contoller.js";

const bookMarkRouter  = Router()

bookMarkRouter.post("/:postId", createBookmark)
bookMarkRouter.delete("/:postId", deleteBookmark)
bookMarkRouter.get("/", getAllBookmarks)

export default bookMarkRouter;