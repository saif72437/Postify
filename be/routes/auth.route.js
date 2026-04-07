import { Router } from "express";
import { forgotPassword, login, me, resetPassword, signup } from "../controllers/auth.controller.js";

const authRouter = Router()


authRouter.post("/signup", signup)
authRouter.post("/login", login)
authRouter.post("/forgot-password", forgotPassword)
authRouter.post("/reset-password", resetPassword)
authRouter.post("/me", me)

export default authRouter