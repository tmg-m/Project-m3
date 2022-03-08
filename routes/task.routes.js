const TaskModel = require("../models/Task.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const allTask = await TaskModel.find()
    res.json( allTask )
  } catch (error) {
    console.log(error)
  }
});

router.post("/create", async (req, res, next) => {
  const { title, discription, hot, imgUrl } = req.body;
  const userId = req.payload._id;
  console.log(userId)
  try {
    const createdTask = await TaskModel.create({ title, discription, hot, imgUrl, creator: userId })
    res.json({ task: createdTask });

  } catch (error) {
    console.log(error)
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  try {
    const task = await TaskModel.findById(id)
    res.json( task );

  } catch (error) {
    console.log(error)
  }
});

router.get("/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await TaskModel.findById(id)
    res.json( task );
  } catch (error) {
    console.log(error)
  }
});

router.put("/:id/edit", async (req, res, next) => {
  const { id } = req.params
  const { title, discription } = req.body;
  try {
    const task = await TaskModel.findByIdAndUpdate(id, { title, discription });
    res.json( task  );
  } catch (error) {
    console.log(error)
  }
});

router.delete("/:id/delete", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findByIdAndDelete(id);
    res.json({ task });
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;