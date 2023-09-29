const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Road to React',
      author: 'Robin Wieruch',
    },
    {
      id: 2,
      title: 'Learning Node',
      author: ' Shelley Powers',
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
  ];
  return(
      <>
        <div className="">
          { books.map((book) => (
            <p key={book.id}>
              {book.title}
              {' '}
              written by
              {' '}
              {book.author}
            </p>
          )) }
        </div>
        <hr />
        <div className="">
          <h2>Add new book</h2>
          <form>
            <input type="text" placeholder="Book title" />
            <select name="catagory" id="category">
              <option value="NodeJS">NodeJS</option>
              <option value="React">React</option>
              <option value="Javascript">Javascript</option>
            </select>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </>
  );
}

  export default Books;
  