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
      <div className="book-list mx-16 mt-10">
        {isLoading && <p className="text-3xl text-gray-400 text-center my-15">Loading...</p>}
        {
        books && books.map((book) => (
          <div key={book.item_id} className="border m-5 p-5 font-secondary bg-white flex justify-between items-center  rounded">
            <div>
              <Book category={book.category} title={book.title} author={book.author} />
              <div className="mt-4 mb-2">
                <button className="text-primary-100 text-xl" type="button">Comments</button>
                <RemoveButton onClick={() => dispatch(removeBook(book.item_id))} />
                <button className="text-primary-100 text-xl" type="button">Edit</button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center pr-16 mr-14 border-r-2">
                <div className="oval rounded-full mr-4" />
                <div className="font-primary">
                  <h3 className="text-3xl">64%</h3>
                  <p className="text-secondary-100 ">Completed</p>
                </div>
              </div>
              <div className="mr-20">
                <p className="uppercase text-secondary-100">current chapter</p>
                <p className="text-lg">Chapter 17</p>
                <button type="button" className="btn btn-blue bg-primary-200 text-gray-200 uppercase mt-4 px-8 py-1 rounded">update progress</button>
              </div>
            </div>
          </div>
        ))
        }
        {books === null && <p className="text-3xl text-gray-400 text-center my-15">Bookstore is empty</p>}
      </div>
      <hr className="mx-20 mt-12 mb-8" />
      <div className="add-book px-5 mx-16 font-primary">
        <h2 className="mb-5 text-2xl font-bold text-secondary-200">Add new book</h2>
        <form className="grid grid-cols-10 gap-8">
          <input
            className="p-3 rounded border col-span-5"
            type="text"
            placeholder="Book Title"
            required
          />
          <select
            className="bg-white border p-3 rounded col-span-3"
            name="category"
            id="category"
            defaultValue=""
          >
            <option value="" disabled className="text-gray-500">Category</option>
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
