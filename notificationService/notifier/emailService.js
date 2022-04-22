/**
 * This file will have the logic to send emails
 */

const nodemailer = require("nodemailer");

/**
 * I need to setup the nodemailer for send the emails
 * smtp host details
 * credentials if needed
 */

module.exports = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'vish007dev@gmail.com',
        pass :'Welcome@07'
    },
    secure : true
});

