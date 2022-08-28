import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

// Import all Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";

import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navBar">
          <nav>
            <h3>
              <Link to="/">Bench.</Link>
            </h3>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/shop">SHOP</Link>
          </nav>
          <hr />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
