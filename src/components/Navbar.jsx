// src/components/navbar/Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import {motion} from 'framer-motion'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Array of navigation links
  const navLinks = [
    { name: 'T-Shirts', path: '/shop/tshirts' },
    { name: 'Hoodies', path: '/shop/hoodies' },
    { name: 'Sneakers', path: '/shop/sneakers' },
    { name: 'Jackets', path: '/shop/jackets' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#0B0F19] font-[Poppins] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-[#A7F3D0] flex items-center space-x-2"
        >
          <span>Cartoon Wears</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-body text-lg items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-[#10B981] transition">
                {link.name}
              </Link>
            </li>
          ))}
          {/* Cart Button (Visible only if logged in) */}
          {isAuthenticated && (
            <li>
              <Link to="/cart" className="hover:text-[#10B981] transition flex items-center">
                <FiShoppingCart className="w-6 h-6" />
              </Link>
            </li>
          )}
          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-[#10B981] text-black px-4 py-2 rounded-lg hover:bg-[#047857] transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="bg-[#10B981] text-black px-4 py-2 rounded-lg hover:bg-[#047857] transition">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Cart Button (Visible only if logged in) */}
          {isAuthenticated && (
            <Link to="/cart" className="hover:text-[#10B981] transition">
              <FiShoppingCart className="w-6 h-6" />
            </Link>
          )}
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.1 }}
          className="fixed top-12  right-0  w-64 bg-[#0B0F19]/50 backdrop-blur-[2.5px] shadow-lg md:hidden  text-center flex flex-col space-y-5 py-5 px-7 z-20"
          
          >
            {navLinks.map((link, index) => (
              <li key={index} className="p-3 border-b border-[#1E1E1E]">
                <Link
                  to={link.path}
                  className="hover:text-[#10B981] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Login/Logout Button */}
            {isAuthenticated ? (
              <li className="p-3 border-b border-[#1E1E1E]">
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="bg-[#10B981] text-black px-4 py-2 rounded-lg hover:bg-[#047857] transition"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="p-3 border-b border-[#1E1E1E]">
                <Link
                  to="/login"
                  className="bg-[#10B981] text-black px-4 py-2 rounded-lg hover:bg-[#047857] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;