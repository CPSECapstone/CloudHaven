const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  vid: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
     type: String,
     required: true
  },
  home_route: {
     type: String,
     required: true
  }
});

module.exports = User = mongoose.model("vendors", VendorSchema);