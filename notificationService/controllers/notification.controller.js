/**
 * Controller for the notification request
 */

const Notification = require("../models/notification.model");



/**
 * Accept a new notification request and retun the tracking id
 */
exports.acceptNotificationRequest = async (req, res) => {
    
    console.log('Notifcation requested');
    //Rquest body
    const notificationObj = {
        subject: req.body.subject,
        content: req.body.content,
        recepientEmails: req.body.recepientEmails,
        requester: req.body.requester,
        ticketId: req.body.ticketId
    }
    try {
        const notifaction = await Notification.create(notificationObj);

        res.status(201).send({
            requestId: notifaction.ticketId,
            status: "Accepted Request - it's in progress"
        });
    } catch (err) {
        console.log("Error will accepting a notification request");
        res.status(500).send({
            message: "Error will accepting a notification request"
        });
    }


}


/**
 * Check the notification status ( if email is sent or not ) using the
 * tracking id
 */

exports.getNotificationStatus = async (req, res) => {
    const reqId = req.params.id;

    try {
        const notification = await Notification.findOne({
            ticketId: reqId
        });

        res.status(200).send({
            requestId : notification.ticketId,
            sentStatus : notification.sentStatus
        });
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Internal error while fetching the notification status"
        })
    }
}