/**
 * This file will have all the logic to manipulate the User resource
 */
const User = require("../models/user.model");
const objectConverter = require("../utils/objectConverter")



/**
 * Fetch the list of all Users
 *    - only ADMIN is allowed to call this method
 *    - ADMIN should be able to filter based on :
 *          1. Name
 *          2. UserType
 *          3. UserStatus
 */

exports.findAllUsers = async (req, res) => { 
   
    /**
    * Write the code here to fetch all the Users from the DB
    * 
    * Fetch the User documents from the users collection
    *
    */
    try{   
      const users = await User.find();
      
      return res.status(200).send(objectConverter.userResponse(users));  // user password will also be returned in response
    }catch(err){
        console.log(err.message);
        res.status(500).send({
            message : "Internal error while fetching all users"
        })
    }
}


/**
 * Fetch the user based on the userId
 */


/**
 * Update the user - status , userType
 *    - only ADMIN should be allowed to do this
 */