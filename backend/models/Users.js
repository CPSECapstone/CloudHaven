const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    default: Date.now,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  },
  ssn: {
    type: Number,
    required: false
  }
});

module.exports = User = mongoose.model("Users", UserSchema);
