import React, { useState, useEffect } from 'react';
import './Bookshelf.css';
import { MdClose } from 'react-icons/md';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(bookshelf);
  }, []);

  const removeFromShelf = (key) => {
    const updatedBooks = books.filter(book => book.key !== key);
    setBooks(updatedBooks);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };

  return (
    <div className="bookshelf">
      {books.length === 0 ? (
        <p>Your bookshelf is empty.</p>
      ) : (
        books.map((book) => (
          <div key={book.key} className="bookshelf-book">
            <div
              className="cross"
              onClick={() => removeFromShelf(book.key)}
            >
              <MdClose className="icon" />
            </div>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p><strong>Edition Count:</strong> {book.edition_count}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookshelf;
