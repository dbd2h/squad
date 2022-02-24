import express from "express";
import {
  getPost,
  postPost,
  watch,
  deletePost,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.route("/").get(getPost).post(postPost);
postRouter.get("/:id([0-9a-f]{24})", watch);
postRouter.get("/:id([0-9a-f]{24})/delete", deletePost);

export default postRouter;
