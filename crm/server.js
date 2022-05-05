const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const bodyParser = require("body-parser");
const rootAdmin = require("./utils/rootAdmin");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Setup the mongodb connection and create on ADMIN user
 */
mongoose.connect(dbConfig.DB_URL, () => {
  console.log("MongoDB connected");

  //Initialization of the default admin user
  rootAdmin.init((admin, error) => {
    if (error) {
      console.log(
        "The following error occurred while the root admin was getting initialized : \n",
        error
      );
    }
    console.log(
      "Root admin initialized with the following details : \n ",
      admin
    );
  });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/ticket.routes")(app);
/**
 * Start the express server,
 * Need to export it so that it can be
 * used by supertest for initiating a request
 */

module.exports = app.listen(serverConfig.PORT, () => {
  console.log("Application has started on the port ", serverConfig.PORT);
});
