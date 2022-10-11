import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import ProductList from "./Pages/ProductList"
import Cart from "./Pages/Cart.jsx";
import './App.css';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";

// ScrollToTop
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>
};

function App() {
  const user=false;
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to='/login' />} />
        <Route path="/login" element={user ?<Navigate to='/'/> :<Login />} />
        <Route path="/register" element={user ?<Navigate to='/'/> :<Register />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
