const User = require("../models/user.model");
const constants = require("../utils/constants");
const Ticket = require("../models/ticket.model");

const objectConverter = require("../utils/objectConverter");
const { ensureIndexes } = require("../models/user.model");
const { ticketPriority } = require("../utils/constants");


/**
 * Create a ticket
 *   v1 - Any one should be able to create the ticket
 */

exports.createTicket = async (req, res) => {

    //logic to create the ticket

    const ticketObj = {
        title: req.body.title,
        ticketPriority: req.body.ticketPriority,
        description: req.body.description
    }

    /**
     * If any Engineer is available
     */
    try {
        const engineer = await User.findOne({
            userType: constants.userTypes.engineer,
            userStatus: constants.userStatus.approved
        });

        if (engineer) {
            ticketObj.assignee = engineer.userId;
        }

        const ticket = await Ticket.create(ticketObj);

        /**
         * Ticket is created now
         * 1. We should update the customer and engineer document
         */

        /**
         * Find out the customer
         */
        if (ticket) {
            const user = await User.findOne({
                userId: req.userId
            })
            user.ticketsCreated.push(ticket._id);
            await user.save();

            /**
             * Update the Engineer
             *
             */
            engineer.ticketsAssigned.push(ticket._id);
            await engineer.save();

            return res.status(201).send(objectConverter.ticketResponse(ticket));
        }



    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Some internal error"
        })
    }

}

/**
 * API to fetch all the tickets
 * 
 * Allow the user to filter based on state
 * 
 * TODO HW : Extension :
 * Using query param, allow the users to
 * filter the list of tickets based on status
 */
exports.getAllTickets = async (req, res) => {
    /**
     * I want to get the list of all the tickets
     */
    console.log(req.userId);

    const user = await User.findOne({userId : req.userId});
    console.log(user);
    if(user.ticketsCreated == null ||user.ticketsCreated.length==0){
         return res.status(200).send({
             message : "No tickets created by you !!!"
         })
    }
    /**
     * I need to get all the ticket ids from 
     */
    /**const tickets = [];
    var count = 0;
    user.ticketsCreated.forEach(async t=>{
        ticketSaved = await Ticket.findOne({_id : t});
        console.log(ticketSaved);
        tickets.push( ticketSaved);
        count ++ ;
        if(count>=user.ticketsCreated.length){
            res.status(200).send(objectConverter.ticketListResponse(tickets));
        }
    });**/

    const tickets = await Ticket.find({
        _id : {
            $in : user.ticketsCreated // array of ticket ids
        }
    });

    res.status(200).send(objectConverter.ticketListResponse(tickets))
    
}