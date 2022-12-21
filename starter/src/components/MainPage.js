import React from "react";
import BookShelves from "./BookShelves";
//there is two props the books and the updated shelf function from App.js
const MainPage = ({books , shelfUpdate}) => {
    //three variables each of them filter on the books to get the books in each shelf
    const currentlyReadingShelf = books.filter((shelfbook)=> shelfbook.shelf === "currentlyReading");
    const wantToReadShelf = books.filter((shelfbook)=> shelfbook.shelf === "wantToRead");
    const readShelf = books.filter((shelfbook)=>shelfbook.shelf === "read");
  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            {/* three book shelves for each shelf with the variables that filters on the books and gets the array of books in each shelf and the update function */}
          <BookShelves title="Currently Read" shelfBooks={currentlyReadingShelf} bookShelfState={shelfUpdate}/>
          <BookShelves title="Want To Read" shelfBooks={wantToReadShelf} bookShelfState={shelfUpdate}/>
          <BookShelves title="Read" shelfBooks={readShelf} bookShelfState={shelfUpdate}/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
