import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  idArray: [{ type: String, required: true }],
  chatHistory: [],
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
