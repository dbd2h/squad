import session from "express-session";
import User from "../models/User.js";
import Chat from "../models/Chat.js";

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { loginID, loginPW } = req.body;
  const user = await User.findOne({ loginID });
  if (!user) {
    return res.render("login", {
      pageTitle: "Login",
      errorMessage: "Your account is not available",
    });
  }
  if (user.loginPW !== loginPW) {
    return res.render("login", {
      pageTitle: "Login",
      errorMessage: "Your Password is wrong",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  res.locals.user = user;
  return res.redirect("/");
};
export const getSignup = (req, res) => {
  return res.render("signup", { pageTitle: "Signup" });
};
export const postSignup = async (req, res) => {
  const { nickname, loginID, loginPW, loginPWAgain } = req.body;
  const userFindNickname = await User.findOne({ nickname: nickname });
  const userFindID = await User.findOne({ loginID: loginID });
  if (nickname === "login" || userFindNickname) {
    return res.render("signup", {
      pageTitle: "Signup",
      errorMessage: "Your nickname is already existed",
    });
  }
  if (userFindID) {
    return res.render("signup", {
      pageTitle: "Signup",
      errorMessage: "Your ID is already existed",
    });
  }
  if (loginPW !== loginPWAgain) {
    return res.render("signup", {
      pageTitle: "Signup",
      errorMessage: "Password value and Again value is different ",
    });
  }
  await User.create({
    nickname,
    loginID,
    loginPW,
  });
  return res.redirect("/login");
};
export const getProfile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  let chat = await Chat.findOne({
    idArray: { $all: [id, res.locals.loggedInUser._id] },
  });
  if (!chat) {
    await Chat.create({
      idArray: [id, res.locals.loggedInUser._id],
      chatHistory: [{ id: "test", content: "test" }],
    });
    chat = await Chat.findOne({
      idArray: { $all: [id, res.locals.loggedInUser._id] },
    });
  }
  console.log(chat);
  res.render("profile", {
    pageTitle: `User: ${user.nickname}`,
    user,
    data: chat.chatHistory,
  });
};
export const logout = (req, res) => {
  req.session.loggedIn = undefined;
  req.session.user = undefined;
  res.locals.user = undefined;
  return res.redirect("/");
};
export const postProfile = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const user = await User.findById(id);
  let chat = await Chat.findOne({
    idArray: { $all: [id, res.locals.loggedInUser._id] },
  });
  const chatID = chat._id;
  const object = { id: res.locals.loggedInUser._id, content: content };
  const array = chat.chatHistory;
  console.log(object);
  await chat.update({ $push: { chatHistory: object } });
  await chat.save();
  chat = await Chat.findOne({
    idArray: { $all: [id, res.locals.loggedInUser._id] },
  });
  res.render("profile", {
    pageTitle: `User: ${user.nickname}`,
    user,
    data: chat.chatHistory,
  });
};
