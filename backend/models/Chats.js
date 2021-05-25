const mongoose = require("mongoose");
const MessageSchema = require("./Message");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
   participants: {
      // Users' ObjectId repersented as a String
      type: [String],
      required: true
   },
   vendor: {
      // Vendor's ObejctID repersented as a String
      type: String,
      default: null
   },
   messages: {
      type: [MessageSchema],
      default: []
   }
});

module.exports = Chats = mongoose.model("Chats", ChatSchema);
