import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ book, addToBookshelf, isAdded }) => {
    const [isAddednow, setisAddednow] = useState(false);

    const addtoshelf = () => {
        addToBookshelf(book);
        setisAddednow(true);
    }

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p><strong>Edition Count:</strong> {book.edition_count}</p>
      {isAdded ? (
        <button className="added-button" disabled>Added to Bookshelf</button>
      ) : isAddednow ? (
        <button className="added-button" disabled>Added to Bookshelf</button>
      ) : (
        <button className="add-button" onClick={addtoshelf}>Add to Bookshelf</button>
      )}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  addToBookshelf: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired,
};

export default BookCard;
