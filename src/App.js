import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login/login";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import { Createid } from "./pages/createid/createid";
import { Products } from "./pages/shop/products.jsx";
import { Cocoa } from "./pages/shop/products/cocoa";
import { Filling } from "./pages/shop/products/filling";
import { Chocolateshells } from "./pages/shop/products/chocolateshells";
import { Chocolateingredients } from "./pages/shop/products/chocolateingredients";
import { ShopContextProvider } from "./context/shopcontext";
import { Foodcoloring } from "./pages/shop/products/foodcoloring";
import { Dryfruitsandnuts } from "./pages/shop/products/dryfruitsandnuts";
import { Frozenfruitandpuree } from "./pages/shop/products/frozenfruitandpuree";
import { Honey } from "./pages/shop/products/honey";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/createid" element={<Createid />} />
            <Route
              path="/*"
              element={
                <div>
                  <Navbar />
                  <Routes>
                    <Route path="cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cocoa" element={<Cocoa />} />
                    <Route path="/filling" element={<Filling />} />
                    <Route path="/chocolateshells" element={<Chocolateshells />} />
                    <Route path="/chocolateingredients" element={<Chocolateingredients />} />
                    <Route path="/foodcoloring" element={<Foodcoloring />} />
                    <Route path="/dryfruitsandnuts" element={<Dryfruitsandnuts />} />
                    <Route path="/frozenfruitandpuree" element={<Frozenfruitandpuree />} />
                    <Route path="/honey" element={<Honey />} />
                    <Route index element={<Shop />} />
                  </Routes>
                </div>
              }
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
