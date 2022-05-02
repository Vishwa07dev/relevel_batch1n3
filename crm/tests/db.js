/**
 * This file will have the setup for the
 * mongodb which will be used for the
 * integration testing
 */

const mongoose = require("mongoose");

const { MongoMemoryServer } = require("mongodb-memory-server");

console.log(require("mongodb-memory-server"));
let mongod ;

/**
 * Connect to the datbase
 */
module.exports.connect =  async  () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const mongooseOpts = {
        maxPoolSize : 10
    };

    mongoose.connect(uri, mongooseOpts);
}


/**
 * Method to clear all the data in the database
 */
 module.exports.clearDatabase = async() =>{
    const collections = mongoose.connection.collections;
    for(const key in collections){
        const collection = collections[key];
        await collection.deleteMany();// This will delete all the documents in the collection 
    }
}

/**
 * Disconnect and close the connection
 */
module.exports.closeDatabase = async () =>{
    
    
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    if(mongod){
        await mongod.stop();
    }
}


