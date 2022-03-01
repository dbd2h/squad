import express from "express";
import { home } from "../controllers/postController.js";
import {
  getLogin,
  postLogin,
  getSignup,
  postSignup,
} from "../controllers/userController.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/signup").get(getSignup).post(postSignup);

export default globalRouter;
