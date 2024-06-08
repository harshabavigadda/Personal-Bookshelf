import React from 'react';
import BookCard from './BookCard';
import './SearchResults.css';

const SearchResults = ({ results, addToBookshelf }) => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div className="search-results">
      {results.map((book) => {
        const isAdded = bookshelf.some((b) => b.key === book.key);
        return (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
