/**
 * This contains the constants to be used everywhere in the code
 */

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
  open: "OPEN",
  closed: "CLOSED",
  blocked: "BLOCKED",
  inProgress: "IN_PROGRESS",
};

exports.ticketPriority = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

exports.userTypesEnum = Object.entries(this.userTypes).map(
  (result) => result[1]
);

exports.userStatusEnum = Object.entries(this.userStatus).map(
  (result) => result[1]
);

exports.ticketStatusEnum = Object.entries(this.ticketStatus).map(
  (result) => result[1]
);

exports.ticketPriorityEnum = Object.entries(this.ticketPriority).map(
  (result) => result[1]
);
