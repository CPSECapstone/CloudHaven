const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
   sender: {
      // User's ObjectId repersented as a String
      type: String,
      required: true
   },
   reciever: {
      // User's ObjectId repersented as a String
      type: String,
      required: true
   },
   vendor: {
      // Vendor's ObejctID repersented as a String
      type: String,
      default: null
   },
   message: {
      type: String,
      default: ""
   },
   timeStamp: {
      type: Date,
      required: true
   },
   color: {
      type: Number
   }
});

module.exports = ChatMessage = mongoose.model("ChatMessages", EventSchema);
