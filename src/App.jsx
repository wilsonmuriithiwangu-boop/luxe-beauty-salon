import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Menu, X, CalendarDays } from "lucide-react";
import { useState } from "react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="nav-container">

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span>LUXE</span>
          <small>BEAUTY SALON</small>
        </NavLink>


        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            to="/booking"
            className="nav-book"
            onClick={closeMenu}
          >
            <CalendarDays size={16} />
            Book Now
          </NavLink>

        </nav>


        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

    </header>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>


      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <h2>LUXE</h2>

            <p>BEAUTY SALON</p>

            <span>
              Beauty that makes you shine.
            </span>

          </div>


          <div className="footer-column">

            <h3>Quick Links</h3>

            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/services">
              Services
            </NavLink>

            <NavLink to="/gallery">
              Gallery
            </NavLink>

            <NavLink to="/about">
              About Us
            </NavLink>

          </div>


          <div className="footer-column">

            <h3>Contact</h3>

            <p>📍 Meru, Kenya</p>

            <p>📞 +254 700 000 000</p>

            <p>💬 WhatsApp Available</p>

          </div>


          <div className="footer-column">

            <h3>Opening Hours</h3>

            <p>Monday - Friday</p>

            <p>8:00 AM - 7:00 PM</p>

            <p>Saturday: 8:00 AM - 6:00 PM</p>

            <p>Sunday: Closed</p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Luxe Beauty Salon.
            All rights reserved.
          </p>

        </div>

      </footer>

    </BrowserRouter>
  );
}

export default App;