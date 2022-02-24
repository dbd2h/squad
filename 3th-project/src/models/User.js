import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  loginID: { type: String, required: true },
  loginPW: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
