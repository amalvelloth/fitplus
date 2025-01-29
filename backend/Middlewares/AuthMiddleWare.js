const jwt = require('jsonwebtoken'); // Import JWT library

// Middleware to verify the token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Expecting token in the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your JWT secret key
    req.user = decoded; // Attach user data to the request object
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token.' });
  }
};

module.exports = { verifyToken };
