import { useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Road to React',
      author: 'Robin Wieruch',
    },
    {
      id: 2,
      title: 'Learning Node',
      author: 'Shelley Powers',
    },
    {
      id: 3,
      title: 'Node.js',
      author: 'Sebastian Springer',
    },
    {
      id: 4,
      title: 'Javascript for Web Developer',
      author: 'Matt Frisbie',
    },
  ]);
  return (
    <>
      <div className="">
        {books.map((book) => (
          <div key={book.id}>
            <Book title={book.title} author={book.author} />
            <button type="button">Remove</button>
          </div>
        ))}
      </div>
      <hr />
      <div className="">
        <h2>Add new book</h2>
        <form>
          <input type="text" placeholder="Book Title" />
          <select name="category" id="category">
            <option value="" disabled selected>Book Author</option>
            <option value="Robin Wieruch">Robin Wieruch</option>
            <option value="Shelley Powers">Shelley Powers</option>
            <option value="Matt Frisbie">Matt Frisbie</option>
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default Books;
