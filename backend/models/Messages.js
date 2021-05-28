const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
   sendor: {
      // User's ObjectId repersented as a String
      type: String,
      required: true
   },
   timeStamp: {
      type: Date,
      required: true
   },
   text: {
      type: String,
      default: ""
   }
});

module.exports = MessageSchema;