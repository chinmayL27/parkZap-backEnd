const Form = require("../models/userForm");

// function for getting all the submitted forms
exports.getAllForms = async (req, res) => {
  // console.log({ message: "sdasdasdf" });
  try {
    const form = await Form.find();
    res.status(200).json({ form }); // sending the found forms with res
  } catch (error) {
    res.status(404).json({ message: error.message }); // in case the forms not found
  }
};
