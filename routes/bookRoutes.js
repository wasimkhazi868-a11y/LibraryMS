/***********************************************************************
 *
 * File Name : bookRoutes.js
 *
 * Purpose:
 * --------
 * This file contains all the API routes related to Books.
 *
 * Think of Routes as a Traffic Police.
 *
 * Example:
 *
 * Client Request
 *        │
 *        ▼
 *  Route (/api/books)
 *        │
 *        ▼
 * Controller Function
 *        │
 *        ▼
 * MongoDB Database
 *        │
 *        ▼
 * Response Sent Back
 *
 ***********************************************************************/

const { validateBook } = require("../middleware/validation");
const authenticateUser = require("../middleware/authMiddleware");

// Import Express
const express = require("express");

// Create Router Object
// Router allows us to create separate route files.
const router = express.Router();


// Import Controller Functions
const {

    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook

} = require("../controllers/bookController");



/***********************************************************************
 *
 * GET ALL BOOKS
 *
 * URL
 * ----
 * GET /api/books
 *
 * Example
 * -------
 * http://localhost:5000/api/books
 *
 ***********************************************************************/

router.get("/", getAllBooks);



/***********************************************************************
 *
 * GET SINGLE BOOK
 *
 * URL
 * ----
 * GET /api/books/:id
 *
 * Example
 * -------
 * http://localhost:5000/api/books/6871fbc...
 *
 ***********************************************************************/

//any one can view the books
router.get("/:id", getBookById);



/***********************************************************************
 *
 * ADD NEW BOOK
 *
 * URL
 * ----
 * POST /api/books
 *
 * Example
 * -------
 * POST http://localhost:5000/api/books
 *
 ***********************************************************************/


// Only logged-in users can add books
router.post("/", authenticateUser, validateBook, addBook);



/***********************************************************************
 *
 * UPDATE BOOK
 *
 * URL
 * ----
 * PUT /api/books/:id
 *
 * Example
 * -------
 * PUT http://localhost:5000/api/books/6871fbc...
 *
 ***********************************************************************/


// Only logged-in users can update books
router.put("/:id", authenticateUser, validateBook, updateBook);



/***********************************************************************
 *
 * DELETE BOOK
 *
 * URL
 * ----
 * DELETE /api/books/:id
 *
 * Example
 * -------
 * DELETE http://localhost:5000/api/books/6871fbc...
 *
 ***********************************************************************/





// Only logged-in users can delete books
router.delete("/:id", authenticateUser, deleteBook);



/***********************************************************************
 *
 * Export Router
 *
 * This router is imported inside server.js
 *
 ***********************************************************************/

module.exports = router;