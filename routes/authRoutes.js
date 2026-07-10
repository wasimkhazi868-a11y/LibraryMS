/***********************************************************************
 *
 * File Name : authRoutes.js
 *
 * Purpose:
 * --------
 * This file contains all authentication related API routes.
 *
 * Authentication APIs:
 *
 * POST /api/auth/register
 * POST /api/auth/login
 *
 ***********************************************************************/

// Import Express
const express = require("express");

// Create Router Object
const router = express.Router();

// Import Authentication Controller
const {

    registerUser,

    loginUser

} = require("../controllers/authController");


/***********************************************************************
 *
 * REGISTER USER
 *
 * URL:
 * POST /api/auth/register
 *
 * Description:
 * Creates a new user account.
 *
 ***********************************************************************/
router.post("/register", registerUser);



/***********************************************************************
 *
 * LOGIN USER
 *
 * URL:
 * POST /api/auth/login
 *
 * Description:
 * Authenticates the user and returns a JWT token.
 *
 ***********************************************************************/
router.post("/login", loginUser);



/***********************************************************************
 *
 * Export Router
 *
 ***********************************************************************/
module.exports = router;