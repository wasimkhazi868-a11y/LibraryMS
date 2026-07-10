/***********************************************************************
 *
 * File Name : authController.js
 *
 * Purpose:
 * --------
 * This file contains all authentication related business logic.
 *
 * It handles:
 * 1. User Registration
 * 2. User Login
 * 3. Password Hashing
 * 4. Password Verification
 * 5. JWT Token Generation
 *
 ***********************************************************************/

// Import User Model
const User = require("../models/User");

// Import bcrypt
// Used for hashing and comparing passwords
const bcrypt = require("bcryptjs");

// Import JWT
// Used for generating authentication tokens
const jwt = require("jsonwebtoken");


/***********************************************************************
 *
 * REGISTER USER
 *
 * API:
 * POST /api/auth/register
 *
 ***********************************************************************/

const registerUser = async (req, res) => {

    try {

        // Get user data from request body
        const { name, email, password } = req.body;


        /***************************************************************
         * Check whether all required fields are provided
         ***************************************************************/
        if (!name || !email || !password) {

            return res.status(400).json({

                success: false,

                message: "All fields are required."

            });

        }


        /***************************************************************
         * Check if email already exists
         ***************************************************************/
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "Email already registered."

            });

        }


        /***************************************************************
         * Hash Password
         *
         * bcrypt.hash(password, saltRounds)
         *
         * Salt Rounds = 10
         *
         ***************************************************************/
        const hashedPassword = await bcrypt.hash(password, 10);


        /***************************************************************
         * Create User
         ***************************************************************/
        const user = await User.create({

            name:name,

            email:email,

            password: hashedPassword

        });
        user.save() //it will reflect data base collection User


        /***************************************************************
         * Registration Successful
         ***************************************************************/
        res.status(201).json({

            success: true,

            message: "Registration Successful",

            user: {

                id: user._id,

                name: user.name,

                email: user.email

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Registration Failed",

            error: error.message

        });

    }

};



/***********************************************************************
 *
 * LOGIN USER
 *
 * API:
 * POST /api/auth/login
 *
 ***********************************************************************/

const loginUser = async (req, res) => {

    try {

        // Get login data
        const { email, password } = req.body;


        /***************************************************************
         * Check if user exists
         ***************************************************************/
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(401).json({

                success: false,

                message: "Invalid Email or Password"

            });

        }


        /***************************************************************
         * Compare entered password with hashed password
         ***************************************************************/
        const isPasswordCorrect = await bcrypt.compare(

            password,

            user.password

        );

        if (!isPasswordCorrect) {

            return res.status(401).json({

                success: false,

                message: "Invalid Email or Password"

            });

        }


        /***************************************************************
         * Generate JWT Token
         *
         * Payload:
         * User ID
         * Email
         *
         * Secret Key:
         * Stored inside .env
         *
         * Token Expiry:
         * 1 Day
         *
         ***************************************************************/
        const token = jwt.sign(

            {

                id: user._id,

                email: user.email

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );


        /***************************************************************
         * Login Successful
         ***************************************************************/
        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                id: user._id,

                name: user.name,

                email: user.email

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: "Login Failed",

            error: error.message

        });

    }

};



/***********************************************************************
 *
 * Export Controller Functions
 *
 ***********************************************************************/

module.exports = {

    registerUser,

    loginUser

};