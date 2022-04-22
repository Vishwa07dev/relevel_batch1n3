/**
 * We will take help of node-cron to repeat some lines of code at regular interval
 */

const cron  = require("node-cron");

//Every thirty second, send the email notification for each new request
cron.schedule('*/30 * * * * *', ()=>{
    /**
     * I need to send emails
     * 
     * 1. Get the list of all the notifications to be sent
     * 2. Send email for each notifications
     */
})

