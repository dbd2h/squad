import express from "express";
import { home } from "../controllers/postController";
import {
  getLogin,
  postLogin,
  getSignup,
  postSignup,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/signup").get(getSignup).post(postSignup);

export default globalRouter;
