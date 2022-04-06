/**
 * This file will containt the schema information of the Student resource
 */

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street : String,
    city :String ,
    state : String,
    country : String,
    pinCode : Number
})

const studentSchema = new mongoose.Schema({

    name : String,
    age : Number,
    email : String,
    createdAt : Date,
    updatedAt : Date,
    subjects : [String],
    address : addressSchema

});



module.exports = mongoose.model('Student', studentSchema);