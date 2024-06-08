import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import { useNavigate } from "react-router";
import { FaSpinner } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const directing = () => {
    navigate("/bookshelf");
  };

  const SubmitSearch = (e) => {
    e.preventDefault();

    if (query) {
        setLoading(true);
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setResults(response.data.docs);
          setLoading(false);
        });
    } else {
      setResults([]);
      setLoading(false);
    }
  };

  return (
    <>
    <h1 className="title">Search by Book Name</h1>
    <div className="search-bar">
      <div className="search-bar-button">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button onClick={SubmitSearch}>
        {loading ? (
            <>
              Searching <FaSpinner className="loading-icon" />
            </>
          ) : (
            "Search"
          )}
            </button>
      </div>
      <button className="myBookshelf" onClick={directing}>
        My Bookshelf
      </button>
    </div>
    </>
  );
};

export default SearchBar;
