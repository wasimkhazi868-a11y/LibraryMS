/***********************************************************************
 *
 * File Name : db.js
 *
 * Purpose:
 * --------
 * This file is responsible for connecting our Node.js application
 * to the MongoDB database using Mongoose.
 *
 * Why use a separate file?
 * ------------------------
 * Keeping the database connection in its own file makes the project
 * clean, reusable, and easy to maintain.
 *
 ***********************************************************************/

// Import Mongoose
// Mongoose is an ODM (Object Data Modeling) library.
// It helps us interact with MongoDB using JavaScript objects.
const mongoose = require("mongoose");


// Create a function to connect to MongoDB
const connectDB = async () => {

    try {

        console.log("====================================");
        console.log("Connecting to MongoDB...");
        console.log("====================================");


        // Connect to MongoDB using the connection string
        // stored inside the .env file
        await mongoose.connect(process.env.MONGO_URI);


        console.log("====================================");
        console.log("MongoDB Connected Successfully");
        console.log("Database :", mongoose.connection.name);
        console.log("Host     :", mongoose.connection.host);
        console.log("====================================");

    }

    catch (error) {

        console.log("====================================");
        console.log("MongoDB Connection Failed");
        console.log(error.message);
        console.log("====================================");

        // Stop the server if database connection fails
        process.exit(1);

    }

};


// Export the function
// This allows server.js to use connectDB()
module.exports = connectDB;