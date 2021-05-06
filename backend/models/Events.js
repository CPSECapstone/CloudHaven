const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const EventSchema = new Schema({
   user: {
      // User's ObjectId repersented as a String
      type: String,
      required: true
   },
   vendor: {
      // Vendor's ObejctID repersented as a String
      type: String,
      default: null
   },
   text: {
      type: String,
      default: ""
   },
   start_date: {
      type: Date,
      required: true
   },
   end_date: {
      type: Date,
      required: true
   },
   color: {
      type: Number
   }
});

module.exports = CalendarEvent = mongoose.model("CalendarEvents", EventSchema);
