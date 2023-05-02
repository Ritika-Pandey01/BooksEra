const jwt = require("jsonwebtoken");

//To check if user is authenticated or not
const auth = (req, res, next) => {
    const token = req.header("x-auth-token");

    //verifying whether a token is valid or not
  if (!token)
    return res.status(401).send("Access denied!");
  try {
    const jwtSecretKey = process.env.JWT_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);

    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token!");
  }
}
// To check for an Admin
const isAdmin = (req, res, next) => {
    auth(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).send("Access denied. Not an admin!");
      }
    });
  };

  module.exports = { auth, isAdmin };