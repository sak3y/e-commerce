import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Privacy from "./pages/privacy";
import Products from "./pages/product";
import Cookie from "./components/cookie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Cookie />
    </>
  );
}

export default App;
