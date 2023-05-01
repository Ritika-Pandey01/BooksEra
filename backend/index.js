const express = require('express');
const cors = require('cors');
const books = require('./books');
const mongoose = require('mongoose');
const signup = require('./routes/signup');
const login = require('./routes/login');
const stripe=require('./routes/stripe');
const book=require('./routes/book');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/stripe', stripe);
app.use('/api/books', book);

app.get('/', (req, res) => {
  res.send('Welcome to BooksEra - richness of self');
});

app.get('/books', (req, res) => {
  res.send(books);
});

const port = process.env.PORT || 5000;
const uri = process.env.DB_URL;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection established...'))
  .catch((error) => console.error('MongoDB connection failed:', error.message));
