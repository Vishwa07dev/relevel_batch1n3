/**
 * Logic to make a POST call to the Notification Service
 */
const Client = require("node-rest-client").Client;

const client = new Client();

exports.client = client;

/**
 * Expose a function which will take the following informartion :
 * 
 * subject,
 * content,
 * recepientEmails,
 * requester,
 * ticketId
 * 
 * and then make a POST call
 */

 exports.sendEmail  = (ticketId, subject, content, emailIds, requester) => {
    
    /**
     * POST call
     *     - URI  : 127.0.0.1:7777/notifServ/api/v1/notifications
     *     - HTTP Verb : POST
     *     - Request Body  -- Done
     *     - Headers
     */

    //Request body
    const reqBody = {
        subject : subject,
        content : content,
        recepientEmails : emailIds,
        requester : requester,
        ticketId : ticketId
    }

    const headers  = {
        "Content-Type" : "application/json"
    }

    const args = {
        data : reqBody,
        headers : headers
    }


    client.post("http://127.0.0.1:7777/notifServ/api/v1/notifications",args, (data,response)=>{
       console.log("Request Sent");
       console.log(data);
    });

    


}