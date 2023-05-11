import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import Home from './routes/Home';
import Categories from './routes/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="book">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
