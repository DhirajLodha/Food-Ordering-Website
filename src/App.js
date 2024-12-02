import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import styles from "./components/css/nicepage.css";
import Menu from "./components/menu/Menu";
function App() {
  let count = localStorage.getItem("cartItem");
  count = JSON.parse(count);
  if (count === null) {
    count = [];
  }

  const [cartCount, setCartCount] = useState(count.length);

  return (
    <Router>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route exact path="/" element={<Home styles={styles} />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route
          exact
          path="/menu"
          element={<Menu setCartCount={setCartCount} />}
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
