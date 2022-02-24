import express from "express";
import { getProfile, logout, postProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/:id([0-9a-f]{24})").get(getProfile).post(postProfile);
userRouter.get("/logout", logout);

export default userRouter;
