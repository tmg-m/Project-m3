const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: { type: String, unique: true, required: true },
  discription: { type: String, required: true },
  hot: { type: Boolean, default: false, },
  assist: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Task', taskSchema);