import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook, getBooks } from '../redux/books/booksSlice';
import { AddButton, RemoveButton } from './Buttons';
import Book from './Book';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const title = e.target.previousElementSibling.previousElementSibling.value;
    const category = e.target.previousElementSibling.value;
    const id = Math.floor(Math.random() * 10000);
    const author = 'Unknown';
    if (title === '' || category === '') return;
    dispatch(addBook({
      title, author, category, item_id: id,
    }));
    e.target.previousElementSibling.previousElementSibling.value = '';
    e.target.previousElementSibling.value = '';
  };

  return (
    <>
      <div className="">
        {isLoading && <p>Loading...</p>}
        {books && books.map((book) => (
          <div key={book.item_id}>
            <Book title={book.title} author={book.author} />
            <RemoveButton onClick={() => dispatch(removeBook(book.item_id))} />
          </div>
        ))}
        {books === null && <p>No books yet</p>}
      </div>
      <hr />
      <div className="">
        <h2>Add new book</h2>
        <form>
          <input
            type="text"
            placeholder="Book Title"
            required
          />
          <select
            name="category"
            id="category"
            defaultValue=""
          >
            <option value="" disabled>Author</option>
            <option value="Action">Action</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <AddButton type="submit" onClick={handleBookSubmit} />
        </form>
      </div>
    </>
  );
};

export default Books;
