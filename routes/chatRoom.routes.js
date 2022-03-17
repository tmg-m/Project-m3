const router = require("express").Router();
const ChatRoomModel = require("../models/ChatRoom.model");

router.post('/create', async (req, res, next) => {
  const userId = req.payload._id;
  const { title } = req.body;
  try {
    const createdChatRoom = await ChatRoomModel.create({title: title, users: userId})
    res.json({ chatRoom: createdChatRoom });

  } catch (error) {
    console.log(error)
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const chatRoom = await ChatRoomModel.findById(id)
    res.json(chatRoom);
  } catch (error) {
    console.log(error)
  }
});

router.post("/:id/join", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const chatRoom = await ChatRoomModel.findByIdAndUpdate(id, { $push: { users: userId } }, { new: true })
    res.json(chatRoom);
  } catch (error) {
    console.log(error)
  }
});

router.put("/:id/unJoin", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const chatRoom = await ChatRoomModel.findByIdAndUpdate(id, { $pull: { users: userId } }, { new: true })
    res.json(chatRoom);
  } catch (error) {
    console.log(error)
  }
});

router.delete("/:id/delete", async (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  try {
    const chatRoom = await ChatRoomModel.findByIdAndDelete(id);
    res.json(chatRoom);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;