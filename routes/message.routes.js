const router = require("express").Router();
const MessageModel = require("../models/Message.model");

router.post("/createMessage", async (req, res, next) => {
  const { name, message, } = req.body;
  const userId = req.payload._id;
  try {
    const createdMessage = await MessageModel.create({ name, message, user: userId })
    res.json({ message: createdMessage });

  } catch (error) {
    console.log(error)
  }
});

module.exports = router;