/**
 * This file will contain the custom middleware for 
 * varifying the request body
 */

const User = require("../models/user.model")

validateSignupRequest = async (req,res, next) =>{
    //Validate if userName exists
    if(!req.body.name){
        return res.status(400).send({
            message : "Failed !  User name is not provided"
        })
    }

    //Validate if the userId exists
    if(!req.body.userId){
        return res.status(400).send({
            message : "Failed !  User Id is not provided"
        })
    }

    /**
     * Valiate if the userIs is already not preset
     */
    const user = await User.findOne({userId : req.body.userId});

    if(user!=null){
        return res.status(400).send({
            message : "Failed !  User Id already exist"
        })
    }

    /**
     * similar validation for all the other fields
     * 
     * email, 
     * password,
     * userType
     */
    next(); // give the controll to the controller
}

module.exports = {
    validateSignUpRequest : validateSignupRequest
}