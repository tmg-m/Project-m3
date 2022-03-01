const TaskModel = require("../models/Task.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "All tasks are here",
  });
});

router.post("/", async (req, res, next) => {
  const { title, discription, hot, imgUrl } = req.body;

  try {
    await TaskModel.create({ title, discription, hot, imgUrl })
    const task = { title, discription, hot, imgUrl };
    res.json({ task: task});
    
  } catch (error) {
    console.log(error)
  }
});

router.post("/:id", async (req, res, next) => {
  res.json({
    message: "Specific task",
  });
});

router.get("/:id/edit", (req, res, next) => {
  res.json({
    message: "edit form",
  });
});

router.put("/:id/edit", (req, res, next) => {
  res.json({
    message: "Edits given task",
  });
});

router.delete("/:id/edit", (req, res, next) => {
  res.json({
    message: "edit form",
  });
});

module.exports = router;