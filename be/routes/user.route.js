import { Router } from "express";
import { login } from "../controllers/user.contoller.js";

const userRouter = Router()


userRouter.get("/login", login)
// userRouter.post("/logout", )
// userRouter.post("/signup", )

export default userRouter;