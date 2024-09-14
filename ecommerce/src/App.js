import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginSignup";
import Product from "./pages/product";
import Shop from "./pages/shop";
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import men_banner from './components/assets/banner_men.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import ShopCategory from './pages/shopCategory';


export default function App() {
  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Shop />} />
                <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
                <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
                <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
                <Route path="/product" element={<Product />}>
                  <Route path=':productId' element={<Product />} />
                </Route>
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
  
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// export default App;
