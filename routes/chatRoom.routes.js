const router = require("express").Router();
const ChatRoomModel = require("../models/ChatRoom.model");

router.get("/", async (req, res, next) => {
  try {
    const chat = await ChatRoomModel.find({})
    res.json( chat );
  } catch (error) {
    console.log(error)
  }
});

router.post('/create', async (req, res, next) => {
  const userId = req.payload._id;
  const { title, taskId } = req.body;
  try {
    const createdChatRoom = await ChatRoomModel.create({ title: title, users: userId, relatedTask: taskId })
    res.json({ createdChatRoom });

  } catch (error) {
    console.log(error)
  }
});

// test
/* router.post("/join", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const chatRoom = await ChatRoomModel.findByAndUpdate({ relatedTask: id }, { $push: { users: userId } }, { new: true })
    res.json(chatRoom);
  } catch (error) {
    console.log(error)
  }
}); */

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const chatRoom = await ChatRoomModel.findById(id).populate('users')
    res.json(chatRoom);
  } catch (error) {
    console.log(error)
  }
});

// creats new chatroom between 2 users
router.post('/:id/usersChat', async (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  const { secondUserName } = req.body;
  try {
    const chatRoom = await ChatRoomModel.create({ title: secondUserName, users: userId })
    const chatRoomForUsers = await ChatRoomModel.findByIdAndUpdate( chatRoom._id , { $push: { users: id } }, { new: true })
    res.json({ chatRoomForUsers });

  } catch (error) {
    console.log(error)
  }
});

router.get("/:id/messages", async (req, res, next) => {
  const { id } = req.params;
  try {
    const chatRoom = await ChatRoomModel.findById(id).populate('chat')
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