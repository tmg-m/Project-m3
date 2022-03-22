const router = require("express").Router();
const MessageModel = require("../models/Message.model");
const ChatRoomModel = require("../models/ChatRoom.model");

router.post("/create", async (req, res, next) => {
  const { message, chatId } = req.body;
  const { _id, name } = req.payload
  try {
    const createdMessage = await MessageModel.create({ name: name, message_body: message, user: _id })
    const messageToChat = await ChatRoomModel.findByIdAndUpdate(chatId, { $push: { chat: createdMessage.id } }, { new: true });
    res.json({ createdMessage, messageToChat });

  } catch (error) {
    console.log(error)
  }
});

module.exports = router;