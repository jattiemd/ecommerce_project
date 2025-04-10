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
import { AuthContextProvider } from "./contexts/auth-context.jsx";
import PrivateRoute from "./HOC/PrivateRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CartContextProvider from "./contexts/cart-context.jsx";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";



function App() {

  return (
    <>
    <AuthContextProvider>
      <CartContextProvider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute>} />
          <Route path="/orderSuccess" element={<PrivateRoute> <OrderSuccess /> </PrivateRoute>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      </CartContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App
