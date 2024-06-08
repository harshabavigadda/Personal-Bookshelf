import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage.js';
import BookshelfPage from './pages/BookshelfPage.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<SearchPage/>} />
        <Route path="/bookshelf" element={<BookshelfPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
