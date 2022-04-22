/**
 * This contains the constants to be used everywhere in the code
 */

// module.exports = {
//   userTypes: {
//     customer: "CUSTOMER",
//     admin: "ADMIN",
//     engineer: "ENGINEER",
//   },
//   userStatus: {
//     pending: "PENDING",
//     approved: "APPROVED",
//     rejected: "REJECTED",
//   },
//   ticketStatus: {
//     open: "OPEN",
//     closed: "CLOSED",
//     blocked: "BLOCKED",
//   },
//   ticketPriority: {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//   },
// };

exports.httpCodes = {
  success: 200,
  internalServerError: 500,
  badRequest: 400,
  forbidden: 403,
  unAuthorized: 401,
};

exports.userTypes = {
  customer: "CUSTOMER",
  admin: "ADMIN",
  engineer: "ENGINEER",
};

exports.userStatus = {
  pending: "PENDING",
  approved: "APPROVED",
  rejected: "REJECTED",
};

exports.ticketStatus = {
  ticketStatus: {
    open: "OPEN",
    closed: "CLOSED",
    blocked: "BLOCKED",
  },
};

exports.TicketStatusEnum = Object.entries(this.ticketStatus).map(
  (result) => result[1]
);

exports.ticketPriority = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

exports.TicketPriorityEnum = Object.entries(this.ticketPriority).map(
  (result) => result[1]
);
