/**
 * This contains the constants to be used everywhere in the code
 */

module.exports = {
    userTypes : {
        customer : "CUSTOMER",
        admin : "ADMIN",
        engineer : "ENGINEER"
    },
    userStatus : {
        pending : "PENDING",
        approved : "APPROVED",
        rejected : "REJECTED"
    },
    ticketStatus : {
        open : "OPEN",
        closed : "CLOSED",
        blocked : "BLOCKED"
    },
    ticketPriority : {
        one : 1,
        two : 2,
        three : 3,
        four : 4
    }
};