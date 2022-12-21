import React from "react";
import Book from "./Book";
//there is three props the title of the shelf the array of each shelf books and the update function
const BookShelves = ({title , shelfBooks, bookShelfState}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {
                shelfBooks.map((shelfBook)=>{
                    return(
                        <li key={shelfBook.id}>
                            <Book book={shelfBook} changeBookShelfState={bookShelfState}/>
                        </li>
                    )
                })
            }
          <li></li>
        </ol>
      </div>
    </div>
  );
};

export default BookShelves;
