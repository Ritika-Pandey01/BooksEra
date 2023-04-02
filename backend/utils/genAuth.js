const jwt = require('jsonwebtoken');
//This function creates a json web token and returns it

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    jwtSecretKey
  );

  return token;
};

module.exports = generateAuthToken;
