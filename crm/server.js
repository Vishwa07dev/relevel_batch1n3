const express = require("express");
const serverConfig = require("./configs/server.config");


const app = express();


/**
 * Start the express server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on the port ", serverConfig.PORT );
})