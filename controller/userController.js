const Form = require("../models/userForm");

// creates the mongoose.schema object and stores the Form data in the database {additional feature for retaining data}
exports.userInput = async (req, res) => {
  const { name, DOB, email, phNumber } = req.body;

  try {
    const form = await Form.create({
      name,
      DOB,
      email,
      phNumber: req.body.phoneNumber,
    });
    console.log(form);
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ messsage: error.message }); // in case of any error in the database creation
  }
};
