const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

exports.details = {
  name: "Vish",
  userId: "admin",
  email: "kankvish7777@gmail.com",
  userType: "ADMIN",
  password: bcrypt.hashSync("Welcome00123", 8),
};

exports.init = async (afterInitializeCallback) => {
  try {
    const user = await User.findOne({ userId: "admin" });

    if (user) {
      return afterInitializeCallback(user);
    } else {
      //Create the admin user

      const user = await User.create(this.details);
      return afterInitializeCallback(user);
    }
  } catch (error) {
    return afterInitializeCallback({}, error);
  }
};
