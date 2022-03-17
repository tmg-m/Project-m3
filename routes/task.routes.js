const TaskModel = require("../models/Task.model");
const ChatRoomModel = require("../models/ChatRoom.model");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const allTask = await TaskModel.find()
    res.json(allTask)
  } catch (error) {
    console.log(error)
  }
});

router.post("/create", async (req, res, next) => {
  const { title, discription, hot, imgUrl } = req.body;
  const userId = req.payload._id;
  try {
    const createdTask = await TaskModel.create({ title, discription, hot, imgUrl, creator: userId });
    const createdChatRoom = await ChatRoomModel.create({ title: createdTask.title, users: userId, relatedTask: createdTask._id });
    res.json({ createdTask, createdChatRoom });

  } catch (error) {
    console.log(error)
  }
});

router.get("/mine", async (req, res, next) => {
  const userId = req.payload._id;
  try {
    const tasks = await TaskModel.find({ creator: userId }).populate('creator');
    res.json({ tasks });
  } catch (error) {
    console.log(error)
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  console.log(id)
  try {
    const task = await TaskModel.findById(id)
    res.json({ userId, task });

  } catch (error) {
    console.log(error)
  }
});

router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const task = await TaskModel.findById(id)
    if(userId === task.creator){
      res.json(task);
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id/edit", async (req, res, next) => {
  const { id } = req.params
  const userId = req.payload._id;
  const { title, discription, hot, imgUrl, } = req.body;
  try {
    const taskDb = await TaskModel.findById(id);
    const creator = taskDb.creator
    if(userId === creator){
      const task = await TaskModel.findByIdAndUpdate(id, { title, discription, hot: hot, imgUrl, });
      res.json(task);
    }
    next()
  } catch (error) {
    console.log(error)
  }
});

router.post("/:id/join", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const task = await TaskModel.findByIdAndUpdate(id, { $push: { assist: userId } }, { new: true });
    res.json(task);
  } catch (error) {
    console.log(error)
  }
});

router.put("/:id/unJoin", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const task = await TaskModel.findByIdAndUpdate(id, { $pull: { assist: userId } }, { new: true })
    console.log(task);
    res.json(task);
  } catch (error) {
    console.log(error)
  }
});


router.delete("/:id/delete", async (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  try {
    const task = await TaskModel.findByIdAndDelete(id);
    res.json({ task });
  } catch (error) {
    console.log(error)
  }
});


module.exports = router;