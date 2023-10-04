import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../redux/books/booksSlice';
import { AddButton, RemoveButton } from './Buttons';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const title = e.target.previousElementSibling.previousElementSibling.value;
    const category = e.target.previousElementSibling.value;
    const id = Math.floor(Math.random() * 10000);
    if (title === '' || category === '') return;
    dispatch(addBook({ title, category, item_id: id }));
  };
  return (
    <>
      <div className="">
        {books.map((book) => (
          <div key={book.id}>
            <Book title={book.title} author={book.author} />
            <RemoveButton onClick={() => dispatch(removeBook(book.item_id))} />
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
          <AddButton onClick={handleBookSubmit} />
        </form>
      </div>
    </>
  );
};

export default Books;
