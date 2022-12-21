import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import * as BookAPI from "./BooksAPI";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  //main books state with the useEffect to get the main page books from the API
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooks();
  }, []);
  //bookshelf update to change books between shelves by using the update API book
  const bookShelfUpdate = (book, updatedShelf) => {
    const bookUpdate = async () => {
      await BookAPI.update(book, updatedShelf);
    };
    const shelfStateUpdate = books.map((eachBook) => {
      if (eachBook.id === book.id) {
        book.shelf = updatedShelf;
        return book;
      }
      return eachBook;
    });
    setBooks(shelfStateUpdate);
    bookUpdate();
  };

  return (
    <div className="app">
      {/* routing between the Main page and the search page by using the paths and the elements */}
      <Routes>
        <Route
          path="/search"
          element={<SearchPage books={books} setBooks={setBooks} />}
        ></Route>
        <Route
          path="/"
          element={
            <div className="list-books">
              <MainPage books={books} shelfUpdate={bookShelfUpdate} />
              <div className="open-search">
                {/* link that makes the page go directly to the search page by using the anchor */}
                <Link to="/search">
                  <a>Add a book</a>
                </Link>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
