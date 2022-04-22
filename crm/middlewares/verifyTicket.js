const {
  TicketStatusEnum,
  TicketPriorityEnum,
  httpCodes,
} = require("../utils/constants");

const validateTicketCreationRequest = (req, res, next) => {
  // Abort any further processing if "title" is not provided
  // warn : check is not done for the lowest number of characters that needs to be present in the title
  if (!req.body.title) {
    return res
      .status(httpCodes.badRequest)
      .send({ message: "Title for the issue is not provided" });
  }

  // Abort any further processing if "description" is not provided
  // warn : check is not done for the lowest number of characters that needs to be present in the description
  if (!req.body.description) {
    return res
      .status(httpCodes.badRequest)
      .send({ message: "Description for the issue is not provided" });
  }

  // Abort any further processing if "status" (if provided) contains invalid value
  if (req.body.status && !TicketStatusEnum.includes(req.body.status)) {
    return res
      .status(httpCodes.badRequest)
      .send({ message: "Please provide a valid value for the status" });
  }

  // Abort any further processing if "priority" (if provided) contains invalid value
  if (req.body.priority && !TicketPriorityEnum.includes(req.body.priority)) {
    return res
      .status(httpCodes.badRequest)
      .send({ message: "Please provide a valid value for the priority" });
  }

  next();
};

module.exports = {
  validateTicketCreationRequest,
};
