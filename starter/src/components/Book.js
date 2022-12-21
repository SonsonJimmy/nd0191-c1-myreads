import React from "react";
//there is two props the book and the updated fuction of shelves
const Book = ({ book, changeBookShelfState }) => {
    console.log(book.shelf);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            //the ? means if you find it goes to the next if not stops to not gets error with the books that doesn't have imageLinks
            backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
            {/* set the value with book.shelf and on change run the updated function from App.js */}
          <select
            defaultValue={book.shelf}
            onChange={(state) => changeBookShelfState(book, state.target.value)}
          >
            <option value="moveTo" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book?.title}</div>
      <div className="book-authors">{book?.publisher}</div>
    </div>
  );
};

export default Book;
