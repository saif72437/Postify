import { Router } from "express";
import { follow, unFollow } from "../controllers/follow.contoller.js";

const followRouter  = Router()

followRouter.post("/:userId", follow)
followRouter.delete("/:userId", unFollow)

export default followRouter;