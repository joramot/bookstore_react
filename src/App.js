import './App.css';
//import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <h1> Bookstore</h1>
        <Books />
        <Categories />
    </div>
  );
}

export default App;
