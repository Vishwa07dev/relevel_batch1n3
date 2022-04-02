/**
 * 
 * Ways of representing relationships :
 * 
 * 1. Embedded documents
 * 2. References
 */

/**
 * Embedded documents
 */

var obj = {
    _id : "adsfeo2324252",
    userName : "Vishwa",
    age : 99,
    contact  :  {
        phone: 91623943535,
        email : "kankvish@gmail.com"
    }
}

/**
 * Create collection with schema and validation in place
 */

db.createCollection("students", {
    validator : {
        $jsonSchema : {
            properties : {  // What all fields the document will have
                 name : {
                     bsonType : "string",
                     description : "This is mandatory field"
                 },
                 year : {
                     bsonType : "double",
                     minimum : 2017,
                     maximum : 3017,
                     description : "represent the year of enrollment of the student"
                 },
                 major : {
                     enum : ["English", "Hindi", "Maths", "Science"],
                     description : "These are only majors allowed for the students"
                 },
                 gpa : {
                     bsonType : ["double"],
                     description : "GPAs of the student"
                 },
                 address : {
                     bsonType : "object",
                     properties : {
                         street : {
                             bsonType : "string",
                             description : "street details"
                         },
                         city : {
                            bsonType : "string",
                            description : "city  details"
                         }
                     },
                     required : ["city"]
                 }

            },
            required : [ "name", "year", "major", "address"],
            bsonType : "object"
        }
    },
    validationLevel : "moderate"
})


/**
 * Create a collection normally
 */

db.contacts.insert([
   {name : "Vishwa", "phone": 121344, "city": "London"},
   {name :"Mohan", "city": "Bangalore"}
]);

/**
 * Add the checks/validators in the existing collection
 */

db.runCommand({
    collMod : "contacts",
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["phone", "name"],
            properties : {
                phone : {
                    description : "This should be a phone number",
                    bsonType : "string"
                },
                name : {
                    description : "Mandatory field",
                    bsonType : "string"
                }
            }
        }
    },
    validationLevel : "moderate"
});




























