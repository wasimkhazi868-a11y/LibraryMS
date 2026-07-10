/***********************************************************************
 *
 * File Name : validation.js
 *
 * Purpose:
 * --------
 * This file contains all validation rules for our APIs.
 *
 * Why?
 * ----
 * Instead of writing validation logic inside every controller,
 * we define it once and reuse it.
 *
 ***********************************************************************/

const { body, validationResult } = require("express-validator");


/***********************************************************************
 *
 * Validation Rules for Adding a Book
 *
 ***********************************************************************/

const validateBook = [

    // Title Validation
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Book title is required.")
        .isLength({ min: 3 })
        .withMessage("Title must contain at least 3 characters."),

    // Author Validation
    body("author")
        .trim()
        .notEmpty()
        .withMessage("Author name is required."),

    // Description Validation (Optional)
    body("description")
        .optional()
        .isLength({ max: 500 })
        .withMessage("Description cannot exceed 500 characters."),

    // Published Date Validation
    body("published_date")
        .optional()
        .isISO8601()
        .withMessage("Invalid date format."),

    /*******************************************************************
     *
     * Final Validation Check
     *
     *******************************************************************/
    (req, res, next) => {

        const errors = validationResult(req);

        // If validation errors exist
        if (!errors.isEmpty()) {

            return res.status(400).json({

                success: false,

                errors: errors.array()

            });

        }

        // Continue to Controller
        next();

    }

];


// Export validation rules
module.exports = {

    validateBook

};