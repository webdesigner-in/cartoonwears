import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // Redux store
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import TShirts from "./pages/Shop/Tshirts.jsx";
import Sneakers from "./pages/Shop/Sneakers.jsx";
import Hoodies from "./pages/Shop/Hoodies.jsx";
import Register from "./pages/Register.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/tshirts" element={<TShirts/>}/>
          <Route path="/shop/sneakers" element={<Sneakers/>}/>
          <Route path="/shop/hoodies" element={<Hoodies/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>
  );
}
