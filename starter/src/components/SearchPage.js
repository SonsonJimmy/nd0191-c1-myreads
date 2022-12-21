import React from "react";
import Book from "./Book";
import * as BookAPI from "../BooksAPI";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//there is two props the mainpage books and the function of the state
const SearchPage = ({ books, setBooks }) => {
  //two states one for the searchbooks and the query from the input
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");
  //useEffect to get the search books from the API and set the searchbooks state
  useEffect(() => {
    const getSearchBooks = async () => {
      if (query.length > 0) {
        const res = await BookAPI.search(query);
        if (res.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(res);
        }
      } else {
        setSearchBooks([]);
      }
    };
    getSearchBooks();
  }, [query]);
  //function to update the main page with the updated search books that choosen in shelfs as when click on read it goes directly to the main page books
  const updateMainBook = (book, updatedShelf) => {
    const mainBooks = async () => {
      await BookAPI.update(book, updatedShelf);
      const res = await BookAPI.getAll();
      setBooks(res);
    };
    mainBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* link to go directly to the main page */}
        <Link to="/">
          <a className="close-search">Close</a>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => setQuery(event?.target?.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.map((searchedBook) => {
            searchedBook.shelf = "none";
            books.filter((mainBook) => {
              if (mainBook.id === searchedBook.id) {
                console.log(mainBook.shelf);
                searchedBook.shelf = mainBook.shelf;
              }
              console.log(searchedBook.shelf);
            });
            return (
              <li key={searchedBook.id}>
                <Book
                  book={searchedBook}
                  changeBookShelfState={updateMainBook}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
