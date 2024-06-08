import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';
import { useHistory, useNavigate } from 'react-router-dom';
import './BookshelfPage.css';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
      <button onClick={() => navigate('/')}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
