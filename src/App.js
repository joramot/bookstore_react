import { Routes, Route, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <nav className="border-b-2 py-7 font-primary bg-white flex items-center justify-between px-20">
        <div className="text-secondary-100 flex items-center gap-7 ml-1">
          <Link to="/"><h1 className="text-primary-200 text-3xl font-bold">Bookstore CMS</h1></Link>
          <p><Link className="uppercase active:text-black" to="/">Books</Link></p>
          <p><Link className="uppercase active:text-black" to="categories">Categories</Link></p>
        </div>
        <div className="mr-2 border circle p-3"><FaUser className="h-5 w-5 fill-primary-200 cursor-pointer" /></div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
