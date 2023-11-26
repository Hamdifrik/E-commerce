
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
    <div>
 <Navbar />
 <Routes>

                 <Route path="/" element={<Home/>} />              
                   <Route path="/products" element={<Products />} />
                   <Route path="/cart" element={<Cart/>} />

                <Route path="/products/:id" element={<Product />} />
                

            </Routes>
 
 </div></BrowserRouter>
  );
}

export default App;
