import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Products from "./Screens/Products";
import ProductDetails from "./Screens/ProductDetails";
import CreateProduct from "./Screens/CreateProduct";

export default function App() {
  return (
    // Wrap entire application in a browser router
    <BrowserRouter>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                {/* To navigate to one of your pages you can use a link */}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Inside of routes you define each route (page that you want to route to) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
