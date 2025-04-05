import Home from "./pages/Home"
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from "react-router-dom";
import ProductCategories from "./pages/ProductCategories.jsx";
import Cart from "./pages/Cart.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./pages/ProductList.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productCategories" element={<ProductCategories />} />
          <Route path="/productCategory/:categoryName" element={<ProductCategory />} />
          <Route path="/product/:productID/:productName" element={<Product />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
