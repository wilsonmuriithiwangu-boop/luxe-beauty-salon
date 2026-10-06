import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import {
  CalendarDays,
} from "lucide-react";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* NAVIGATION */}
        <header className="navbar">
          <div className="navbar-inner">

            <Link to="/" className="logo">
              <span>LUXE</span>
              <small>BEAUTY SALON</small>
            </Link>

            <nav className="nav-links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Gallery
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Contact
              </NavLink>

              <NavLink to="/booking" className="nav-book">
                <CalendarDays size={16} />
                Book Now
              </NavLink>
            </nav>

          </div>
        </header>

        {/* PAGES */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">

            <div className="footer-brand">
              <Link to="/" className="logo">
                <span>LUXE</span>
                <small>BEAUTY SALON</small>
              </Link>

              <p>
                Beauty, confidence and a little time
                just for you.
              </p>
            </div>

            <div className="footer-links">
              <h4>QUICK LINKS</h4>

              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/booking">Book Now</Link>
            </div>

            <div className="footer-contact">
              <h4>CONTACT</h4>

              <p>Meru, Kenya</p>
              <p>+254 789 726 060</p>
              <p>hello@luxebeautysalon.com</p>
            </div>

            <div className="footer-hours">
              <h4>OPENING HOURS</h4>

              <p>
                Monday - Friday
                <span>8:00 AM — 7:00 PM</span>
              </p>

              <p>
                Saturday
                <span>8:00 AM — 6:00 PM</span>
              </p>

              <p>
                Sunday
                <span>Closed</span>
              </p>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Luxe Beauty Salon.
              All rights reserved.
            </p>

            <p>
              Designed & developed with care.
            </p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;