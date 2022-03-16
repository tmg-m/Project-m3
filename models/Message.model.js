const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  message: { type: String },
});

module.exports = model('Message', messageSchema);