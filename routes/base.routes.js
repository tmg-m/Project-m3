const { isAuthenticated } = require('../middleware/jwt.middleware');
const TaskModel = require('../models/Task.model');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
    const { name } = req.payload;
    try {
      const allTask = await TaskModel.find()
      res.json({ name, allTask });
    } catch (error) {
      console.log(error)
    }  
});

module.exports = router;