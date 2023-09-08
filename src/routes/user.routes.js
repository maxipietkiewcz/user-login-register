import { Router } from "express";
import { createUser, getUser, deleteUser, UpdateUser, getUserId } from "../controllers/user.controllers.js";


const userRouter = Router();


userRouter.get("/", getUser);
userRouter.get("/:id", getUserId);
userRouter.post("/", createUser);
userRouter.put("/:id", UpdateUser);
userRouter.delete("/:id", deleteUser);

export { userRouter }


