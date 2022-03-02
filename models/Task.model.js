const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: 'User'},
  title: { type: String },
  discription: { type: String },
  hot: { type: Boolean, default: false, },
  imgUrl: { type: String },
  assist: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Task', taskSchema);