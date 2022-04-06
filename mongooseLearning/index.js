const mongoose   = require("mongoose");
const { getMaxListeners } = require("./models/student.model");


/**
 * Try to establish the connection with MonoDB using Mongoose
 */
mongoose.connect("mongodb://localhost/mongooseDemo",()=>{
   console.log('Connected to MongoDB');
},err => {
    console.log('Error ', err.message);
})


const Student = require('./models/student.model');

async function dbOperations(){

   /**
    * Find a student document based on id
    * 
    * 624dc20d03ad8c484e27f120
    */
    /**try{
      const student = await Student.findById("624dc20d03ad8c484e27f120");
      console.log(student);
    }catch(err){
        console.log(err.message);
    }
    **/
    /**
     * Find the document based on other fields
     */
    /**
     * const students = await Student.find({name : "Vishwa"});
    console.log(students); **/

    /**
     * Just get any one document matching my creterion
     */

   // const student = await Student.findOne({name : "Vishwa"});
    //console.log(student);

    /**
     * Delete all the record with mathching query
     */
    //await Student.deleteMany({name : "Vishwa"});
    //Student.deleteOne({name : "Vishwa"});

    /**
     * Complex query
     * 
     * Find all the students whose age is greater than 20 years and name is Vishwa
     */
    const students = await Student.where("age").gt("20").where("name").equals("Vishwa").limit(1);
    console.log(students);




    /**
     * Insert a new Student document in the Student collection
     */
    /** 
    try{
      const student  = await  Student.create({
         name : "Vishwa",
         age : 45,
         subjects : ["DSA"],
         email : "kankvish@gmail.com",
         address : {
            street : "Bellandur",
            city :"Bangalore" ,
            state : "karnantaka",
            country : "India",
            pinCode : 560103
         }
     });
     console.log(student);
    }catch(err){
        console.log("Error while inserting data", err.message);
    }
    **/
    
}

dbOperations();

console.log("Written in the last, but printed when");