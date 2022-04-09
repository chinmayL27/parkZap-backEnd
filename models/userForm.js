const mongoDB = require("mongoose");
const validatePhoneNumber = require("validate-phone-number-node-js");
const validator = require("validator");

const Form = new mongoDB.Schema({
  name: { type: String, required: true },
  DOB: { type: Date, required: true }, // Date type sent in req.body from client-end {frontEnd}
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Invalid Email!!"], // email validation at server
    unique: true,
  },
  phNumber: {
    type: Number,
    required: true,
    validate: [validatePhoneNumber.validate, "Invalid Phone Number!!"], // phone number validation at server
  },
});

module.exports = mongoDB.model("Form", Form);
