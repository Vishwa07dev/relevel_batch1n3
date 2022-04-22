const ticketController = require("../controllers/ticket.controller");
const { authJwt, validateTicketCreationRequest } = require("../middlewares");

module.exports = (app) => {
  app.post(
    "/crm/api/v1/tickets",
    [authJwt.verifyToken, validateTicketCreationRequest],
    ticketController.createTicket
  );

  app.get(
    "/crm/api/v1/tickets",
    [authJwt.verifyToken],
    ticketController.getAllTickets
  );

  app.get(
    "/crm/api/v1/tickets/:id",
    [authJwt.verifyToken],
    ticketController.getOneTicket
  );
};
