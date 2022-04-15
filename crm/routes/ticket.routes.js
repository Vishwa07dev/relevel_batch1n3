const ticketController = require("../controllers/ticket.controller");
const { authJwt } = require("../middlewares");

module.exports = (app) => {
    app.post("/crm/api/v1/tickets",[authJwt.verifyToken],ticketController.createTicket);
}