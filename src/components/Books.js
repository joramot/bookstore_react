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
  });

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
      <div className="book-list mx-16 mt-10">
        {isLoading && <p className="text-3xl text-gray-400 text-center my-15">Loading...</p>}
        {books && books.map((book) => (
          <div key={book.item_id} className="border m-5 p-5 font-secondary bg-white flex justify-between items-center  rounded">
            <div className="mt-4 mb-2">
              <Book title={book.title} author={book.author} />
              <button className="text-primary-100 text-xl" type="button">Comments</button>
              <RemoveButton onClick={() => dispatch(removeBook(book.item_id))} />
              <button className="text-primary-100 text-xl" type="button">Edit</button>
            </div>
          </div>
        ))}
        {books === null && <p>No books yet</p>}
      </div>
      <hr className="mx-20 mt-12 mb-8" />
      <div className="add-book px-5 mx-16 font-primary">
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
