import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Book from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <h1> Bookstore</h1>
      <nav>
        <div>
          <p><Link to="/">Book</Link></p>
          <p><Link to="categories">Categories</Link></p>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
