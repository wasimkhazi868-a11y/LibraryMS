/***********************************************************************
 *
 * File Name : authMiddleware.js
 *
 * Purpose:
 * --------
 * This middleware verifies whether the user is authenticated
 * using a JWT (JSON Web Token).
 *
 * If the token is:
 * ✔ Valid   → Allow access to the protected route.
 * ✖ Invalid → Return 401 Unauthorized.
 *
 ***********************************************************************/

// Import JWT Package
const jwt = require("jsonwebtoken");


/***********************************************************************
 *
 * Authentication Middleware
 *
 ***********************************************************************/
const authenticateUser = (req, res, next) => {

    try {

        /***************************************************************
         *
         * Read Authorization Header
         *
         * Example:
         *
         * Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
         *
         ***************************************************************/
        const authHeader = req.headers.authorization;


        /***************************************************************
         * Check if Authorization Header Exists
         ***************************************************************/
        if (!authHeader) {

            return res.status(401).json({

                success: false,

                message: "Access Denied. Token is missing."

            });

        }


        /***************************************************************
         * Check Header Format
         *
         * It should start with:
         * Bearer
         *
         ***************************************************************/
        if (!authHeader.startsWith("Bearer ")) {

            return res.status(401).json({

                success: false,

                message: "Invalid Authorization Header."

            });

        }


        /***************************************************************
         * Extract JWT Token
         *
         * Example:
         *
         * Bearer abc.xyz.123
         *
         * We only need:
         *"x y".split(" ") = [x,y]=[1]
         * abc.xyz.123=[x,y] = 
         *
         ***************************************************************/
        const token = authHeader.split(" ")[1];


        /***************************************************************
         * Verify Token
         *
         * jwt.verify()
         * checks:
         * 1. Signature
         * 2. Expiry
         * 3. Secret Key
         *
         ***************************************************************/
        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );


        /***************************************************************
         * Store Logged-in User Information
         *
         * This data can be accessed later in controllers.
         *
         * Example:
         *
         * req.user.id
         * req.user.email
         *
         ***************************************************************/
        req.user = decoded;//{'id':36746,'email':"xyz@g.com"}


        /***************************************************************
         * Continue to the Next Middleware / Controller
         ***************************************************************/
        next();

    }

    catch (error) {

        return res.status(401).json({

            success: false,

            message: "Invalid or Expired Token."

        });

    }

};


/***********************************************************************
 *
 * Export Middleware
 *
 ***********************************************************************/
module.exports = authenticateUser;