const TaskModel = require("../models/Task.model");
const UserModel = require("../models/User.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const allUser = await UserModel.find()
    res.json({ allUser })
  } catch (error) {
    console.log(error)
  }
});


router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id)
    const allTask = await TaskModel.find()
    const userTask = allTask.filter((task) => { if (task.creator == id) { return task } })
    console.log(userTask)
    res.json({ user, userTask });

  } catch (error) {
    res.status(400).json({ message: "User not found!" });
  }
});

router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    if (userId === id) {
      const user = await UserModel.findById(id)
      res.json({ user });
    }
  } catch (error) {
    res.status(400).json({ message: "Not you'r account!" });
  }
});

router.put("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  const { email, password, name, username, imgUrl, about } = req.body;
  try {
    if (id === userId) {
      const user = await UserModel.findByIdAndUpdate(id, { email, password, name, username, imgUrl, about });
      res.json({ user });
    }
  } catch (error) {
    res.status(400).json({ message: "Not you'r account!" });
  }
});

router.delete("/:id/delete", async (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  try {
    if (userId === id) {
      const user = await UserModel.findByIdAndDelete(userId);
      res.json({ user });
    }
  } catch (error) {
    res.status(400).json({ message: "Not you'r account!" });
  }
});

module.exports = router;