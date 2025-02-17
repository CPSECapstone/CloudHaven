const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: {
     type: String,
     required: true
  },
  home_route: {
     type: String,
     required: true
  }
});

module.exports = Vendor = mongoose.model("Vendors", VendorSchema);
