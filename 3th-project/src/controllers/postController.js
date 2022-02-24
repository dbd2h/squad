import Post from "../models/Post";

export const home = async (req, res) => {
  const posts = await Post.find({});
  return res.render("home", { pageTitle: "Home", posts });
};
export const getPost = (req, res) => {
  return res.render("post", { PageTitle: "Post" });
};
export const postPost = async (req, res) => {
  const { title, content } = req.body;
  const poster = res.locals.loggedInUser.nickname;
  const posterId = res.locals.loggedInUser._id;
  const date = new Date();
  await Post.create({
    poster,
    posterId,
    title,
    content,
    createdAt: date.toLocaleDateString(),
  });
  return res.redirect("/");
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    return res.render("404", { pageTitle: "Post not found" });
  }
  return res.render("postWatch", { pageTitle: post.title, post });
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  return res.redirect("/");
};
