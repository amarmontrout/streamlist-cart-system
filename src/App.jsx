import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Subscriptions from "./pages/subscriptions";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // Lift the cart state here so it can be shared across the app
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {/* Optionally, you can pass the cart to Navbar if you need to show a count */}
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Pass the cart state and updater to Subscriptions */}
        <Route
          path="/subscriptions"
          element={<Subscriptions cart={cart} setCart={setCart} />}
        />
        {/* Pass the cart state and updater to Cart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
