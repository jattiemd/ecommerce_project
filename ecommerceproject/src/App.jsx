import Home from "./pages/Home"
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from "react-router-dom";
import ProductCategories from "./pages/ProductCategories.jsx";
import Cart from "./pages/Cart.jsx";


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productCategories" element={<ProductCategories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App
