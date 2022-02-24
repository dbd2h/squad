import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  poster: { type: String, required: true },
  posterId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: String, required: true },
  watched: { type: Number, default: 0, required: true },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
