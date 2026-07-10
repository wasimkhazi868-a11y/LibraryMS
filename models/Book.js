/***********************************************************************
 *
 * File Name : Book.js
 *
 * Purpose:
 * --------
 * This file defines the structure (Schema) of a Book document
 * that will be stored inside the MongoDB database.
 *
 * Collection Name:
 * ----------------
 * books
 *
 * Every document inside the books collection will follow
 * the structure defined below.
 *
 ***********************************************************************/

// Import mongoose
const mongoose = require("mongoose");


/***********************************************************************
 *
 * What is a Schema?
 *
 * A Schema defines:
 *
 * ✔ Which fields will be stored
 * ✔ Their data types
 * ✔ Validation rules
 * ✔ Default values
 *
 ***********************************************************************/

const bookSchema = new mongoose.Schema(

    {

        // Book Title
        title: {

            type: String,

            required: [true, "Book title is required"],

            trim: true
            

        },


        // Book Author
        author: {

            type: String,

            required: [true, "Author name is required"],

            trim: true

        },


        // Book Description
        description: {

            type: String,

            default: ""

        },


        // Published Date
        published_date: {

            type: Date

        }

    },

    // Automatically creates createdAt and updatedAt fields
    {
        timestamps: true
    }

);


/***********************************************************************
 *
 * What is a Model?
 *
 * A Model is used to interact with MongoDB.
 *
 * Examples:
 *
 * Book.find()
 * Book.create()
 * Book.findById()
 * Book.findByIdAndDelete()
 *
 ***********************************************************************/

const Book = mongoose.model("Book", bookSchema);


// Export the model
module.exports = Book;