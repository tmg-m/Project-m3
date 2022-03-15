const TaskModel = require('../models/Task.model');
const fileUploader = require('../config/cloudinary.config');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
    // const { name } = req.payload;
    try {
      const allTask = await TaskModel.find()
      res.json({ /* name, */ allTask });
    } catch (error) {
      console.log(error)
    }  
});

router.post('/imageUpload', fileUploader.single('imgUrl'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  res.json({ cloudUrl: req.file.path });
});

module.exports = router;