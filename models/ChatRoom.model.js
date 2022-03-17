const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const chatRoomSchema = new Schema({
  title: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  chat: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

module.exports = model('ChatRoom', chatRoomSchema);