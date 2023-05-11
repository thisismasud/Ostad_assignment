const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(bodyParser.json());

// Route that serves index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route that returns a JSON array of books
let books = [];
app.get('/books', (req, res) => {
  res.json(books);
});

// Route that allows a user to add a book to the collection
app.post('/books', (req, res) => {
  const { title, author, publishedDate } = req.body;
  const id = uuidv4(); // generate a unique ID for the book
  const book = { id, title, author, publishedDate };
  books.push(book); // add the book to the collection
  res.json(book);
});

// Route that allows a user to delete a book from the collection
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.json({ message: `Book with ID ${id} was successfully deleted.` });
  } else {
    res.status(404).json({ message: `Book with ID ${id} not found.` });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
