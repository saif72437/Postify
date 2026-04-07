import { Router } from "express";
import { getFollowers, getFollowing, getUser, getUserBySearch, updateUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.get("/search", getUserBySearch);
userRouter.get("/:id/followers", getFollowers);
userRouter.get("/:id/following", getFollowing);

export default userRouter;