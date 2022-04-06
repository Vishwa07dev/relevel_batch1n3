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

    name : {
        type : String,
        required : true  // This field is mandatory
    },
    age : {
       type : Number,
       min :16,
       max :60
    },
    email : {
      type : String,
      required : true,
      lowercase :true, //this option will convert the email into lower case and then store in the db
      minLength : 10

    },
    /**
     * Created by default
     */
    createdAt : {
        type : Date,
        default :  () => {
            return Date.now();
        },
        immutable : true
    },
    updatedAt : {
        type : Date,
        default :  () => {
            return Date.now();
        }
        
    },
    /**
     * I need to add the validator that student should pick atleast 2 subjects
     */
    subjects : {
        type : [String],
        validate : {
            validator : arr => arr.length >=2,
            message : "Subjects selected can't be less than 2"
        }
    },
    address : addressSchema

});



module.exports = mongoose.model('Student', studentSchema);