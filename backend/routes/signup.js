const bcrypt = require('bcrypt');
const Joi = require('joi');
const express = require('express');
const { User } = require('../models/user');
const generateAuthToken = require('../utils/genAuth');

const router = express.Router();

/**
this route performs a check of the data entered by the user during signup
then checks for error and then creates an object in case no error
before creating a user in the database we hash the password and generate a token
and send it to the UI
*/

router.post('/', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  //if the schema does not match we can see the error

  if (error) return res.status(400).send(error.details[0].message);
  //in case there is error we will send the status code bad request i.e. 400

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('The user already exists...');
  //this shows that user already exists and the user cannot register again

  console.log('here');

  const { name, email, password } = req.body;

  user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = generateAuthToken(user);

  res.send(token);
});

module.exports = router;
