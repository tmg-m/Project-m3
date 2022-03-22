const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  message_body: { type: String },
});

module.exports = model('Message', messageSchema);