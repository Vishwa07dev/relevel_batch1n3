/**
 * Define the routes for the User resource
 */

const userController = require("../controllers/user.controller");
const { authJwt } = require("../middlewares");

module.exports = (app) =>{
 /**
 * GET 127.0.0.1:8081/crm/api/v1/users/
 */
  
 app.get("/crm/api/v1/users/",[authJwt.verifyToken, authJwt.isAdmin],userController.findAllUsers);


 /**
  * GET 127.0.0.1:80801/crm/api/v1/users/{id}
  */
 app.get("/crm/api/v1/users/:userId",[authJwt.verifyToken],userController.findUserById);


 /**
  * PUT 127.0.0.1:8081/crm/api/v1/users/{userId}
  */
 app.put("/crm/api/v1/users/:userId", [authJwt.verifyToken,authJwt.isAdmin], userController.updateUser);

}