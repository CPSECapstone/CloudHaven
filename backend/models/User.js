const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: {
    type: Number,
    required: true,
    unique: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
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
    default: Date.now
  },
  phone_number: {
    type: String,
    required: true
  },
  ssn: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);