/**
 * This file will contain the custom middleware for
 * varifying the request body
 */

const User = require("../models/user.model");
const constant = require("../utils/constants");

validateSignupRequest = async (req, res, next) => {
  //Validate if userName exists
  if (!req.body.name) {
    return res.status(400).send({
      message: "Failed !  User name is not provided",
    });
  }

  //Validate if the userId exists
  if (!req.body.userId) {
    return res.status(400).send({
      message: "Failed !  User Id is not provided",
    });
  }

  /**
   * Valiate if the userIs is already not preset
   */
  const user = await User.findOne({ userId: req.body.userId });

  if (user != null) {
    return res.status(400).send({
      message: "Failed !  User Id already exist",
    });
  }

  if (!req.body.email) {
    return res.status(400).send({
      message: "Failed !  User Email Id is not provided",
    });
  }

  /**
   * if the email id is already existing
   */

  const email = await User.findOne({ email: req.body.email });
  if (email != null) {
    return res.status(400).send({
      message: "Failed !  Email ID already exists",
    });
  }

  if (!req.body.password) {
    return res.status(400).send({
      message: "Failed !  User password is not provided",
    });
  }

  /**
     * Validation for the use type
     * customer : "CUSTOMER",
        admin : "ADMIN",
        engineer
     */
  const userType = req.body.userType;
  const userTypes = [
    constant.userTypes.customer,
    constant.userTypes.admin,
    constant.userTypes.engineer,
  ];
  if (userType && !userTypes.includes(userType)) {
    return res.status(400).send({
      message: "Failed !  User type is not correctly provided",
    });
  }

  /**
   * Scope of improving the code :
   *
   *     Validate if the email id is in correct format :  abc@xyz.com   , adcw1313
   */
  const validEmail = require("../utils/emailChecker")(req.body.email);
  if (!validEmail) {
    return res.status(400).send({
      message: "Entered email is invalid",
    });
  }

  /**
   * Validate if the password contains valid characters
   * */
  const validPassword = require("../utils/passwordChecker")(req.body.password);
  if (!validPassword) {
    return res.status(400).send({
      message: "Entered password contains invalid characters",
    });
  }

  /**
   * similar validation for all the other fields
   *
   * email,
   * password,
   * userType
   */
  next(); // give the controll to the controller
};

module.exports = {
  validateSignUpRequest: validateSignupRequest,
};
