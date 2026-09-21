import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Faculty", path: "/faculty" },
  { name: "Results", path: "/results" },
  { name: "Gallery", path: "/gallery" },
  { name: "Notice", path: "/notice" },
  { name: "Admission", path: "/admission" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-navbar">

      {/* TOP CONTACT BAR */}
      <div className="top-contact-bar">
        <div className="container top-contact-container">

          <div className="top-contact-left">

            <a href="tel:+918638372785">
              <Phone size={14} />
              <span>+91 86383 72785</span>
            </a>

            <a href="mailto:adarshaacademypalhazi@gmail.com">
              <Mail size={14} />
              <span>adarshaacademypalhazi@gmail.com</span>
            </a>

            <span className="top-location">
              <MapPin size={14} />
              <span>Palhaji, Barpeta, Assam - 781309</span>
            </span>

          </div>

          <div className="top-contact-right">

            {/* SOCIAL LINKS */}
            <div className="social-links">

              <a
                href="#"
                aria-label="Facebook"
                className="social-facebook"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="social-instagram"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="social-youtube"
              >
                ▶
              </a>

            </div>

            <Link
              to="/admission"
              className="top-admission-btn"
            >
              Admission Enquiry
            </Link>

          </div>

        </div>
      </div>


      {/* MAIN NAVIGATION */}
      <nav className="main-navbar">

        <div className="container navbar-container">

          {/* SCHOOL BRAND */}
          <Link
            to="/"
            className="school-brand"
            onClick={closeMenu}
          >

            <div className="school-logo">
              <span>AA</span>
            </div>

            <div className="school-brand-text">

              <h1>ADARSHA ACADEMY</h1>
              <p>ASSAMESE MEDIUM SCHOOL | PALHAZI, BARPETA, ASSAM</p>

              <small>
                Education • Discipline • Excellence
              </small>

            </div>

          </Link>


          {/* DESKTOP NAVIGATION */}
          <div className="desktop-navigation">

            {navLinks.map((link) => {

              const isActive =
                location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`desktop-nav-link ${
                    isActive ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );

            })}

          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>


        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-navigation ${
            menuOpen ? "show" : ""
          }`}
        >

          <div className="mobile-navigation-inner">

            {navLinks.map((link) => {

              const isActive =
                location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`mobile-nav-link ${
                    isActive ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );

            })}

            <Link
              to="/admission"
              className="mobile-admission-btn"
              onClick={closeMenu}
            >
              Admission Enquiry
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;