/***********************************************************************
 *
 * File Name : User.js
 *
 * Purpose:
 * --------
 * This file defines the User Schema.
 *
 * Every user who registers in our application will be stored
 * in the MongoDB "users" collection.
 *
 * Mongoose will automatically create a collection named:
 *
 * users
 *
 ***********************************************************************/

// Import Mongoose
const mongoose = require("mongoose");


/***********************************************************************
 *
 * What is a Schema?
 *
 * A Schema defines:
 *
 * ✔ Which fields should be stored
 * ✔ Their data types
 * ✔ Validation rules
 * ✔ Default values
 *
 ***********************************************************************/

const userSchema = new mongoose.Schema(

    {

        /***************************************************************
         * Full Name
         ***************************************************************/
        name: {

            type: String,

            required: [true, "Name is required"],

            trim: true

        },


        /***************************************************************
         * Email Address
         *
         * unique: true
         * Prevents duplicate email registrations.
         ***************************************************************/
        email: {

            type: String,

            required: [true, "Email is required"],

            unique: true,

            lowercase: true,

            trim: true

        },


        /***************************************************************
         * Password
         *
         * IMPORTANT:
         * Never store plain text passwords.
         * Passwords will be hashed using bcrypt before saving.
         ***************************************************************/
        password: {

            type: String,

            required: [true, "Password is required"]

        }

    },

    /***************************************************************
     * Automatically creates:
     *
     * createdAt
     * updatedAt
     *
     ***************************************************************/
    {

        timestamps: true

    }

);


/***********************************************************************
 *
 * Create User Model
 *
 * This model is used to perform database operations like:
 *
 * User.find()
 * User.findOne()
 * User.create()
 * User.findById()
 *
 ***********************************************************************/

const User = mongoose.model("User", userSchema);


/***********************************************************************
 *
 * Export Model
 *
 ***********************************************************************/

module.exports = User;