const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const formController = require("../controller/formController");

router.route("/").get((req, res) => {
  res.send("backend_deployed");
});
router.route("/user-form").post(userController.userInput); // requirement number 1 {user-form input}
router.route("/showForms").get(formController.getAllForms); // requirement number 5 {all form show}

module.exports = router;
