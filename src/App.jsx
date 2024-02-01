import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
