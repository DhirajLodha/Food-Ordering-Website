import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Home/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import styles from "./components/css/nicepage.css";
import { useState } from "react";
function App() {
  let count = localStorage.getItem("cartItem");
  count = JSON.parse(count);
  if (count === null) {
    count = [];
  }
  const [CartCount, setCartCount] = useState(count.length);
  return (
    <Router>
      <NavBar cartCount={CartCount} />
      <Routes>
        <Route exact path="/" element={<Home styles={styles} />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
