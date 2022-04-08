const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");


const app = express();
/**
 * Setup the mongodb connection and create on ADMIN user
 */
mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("MongoDB connected");
})



/**
 * Start the express server
 */
app.listen(serverConfig.PORT, () => {
    console.log("Application has started on the port ", serverConfig.PORT );
})