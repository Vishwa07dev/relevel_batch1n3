/**
 * Define the routes for the User resource
 */

const userController = require("../controllers/user.controller");
const { authJwt } = require("../middlewares");

module.exports = (app) =>{
 /**
 * GET 127.0.0.1:8081/crm/api/v1/users/
 */
  
 app.get("/crm/api/v1/users/",[authJwt.verifyToken],userController.findAllUsers);


}