import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [results, setResults] = useState([]);

  const addToBookshelf = (book) => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...storedBookshelf, book]));
  };

  return (
    <div className="search-page">
      <SearchBar setResults={setResults} />
      <SearchResults results={results} addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
