import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">

            {/* School Information */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-column footer-school-info">
                <h2>Adarsha Academy</h2>

                <p className="footer-description">
                  Adarsha Academy is committed to providing quality education
                  and developing students through knowledge, discipline, and
                  moral values.
                </p>

                <div className="footer-contact-item">
                  <MapPin size={18} />
                  <span>
                    Palhazi, Barpeta,
                    <br />
                    Assam - 781309
                  </span>
                </div>

                <div className="footer-contact-item">
                  <Phone size={18} />
                  <span>+91 60000 00000</span>
                </div>

                <div className="footer-contact-item">
                  <Mail size={18} />
                  <span>info@adarshaacademy.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-column">
                <h3>QUICK LINKS</h3>

                <ul className="quick-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/academics">Academics</Link>
                  </li>
                  <li>
                    <Link to="/faculty">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/results">Results</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/notice">Notice</Link>
                  </li>
                  <li>
                    <Link to="/admission">Admission</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Find Us on Map */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-column">
                <h3>FIND US ON MAP</h3>
                <div style={{ marginTop: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.000000000000!2d90.000000!3d26.310000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzM2LjAiTiA5MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="150" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-3">
            {/* Copyright */}
            <div className="col-lg-5 col-md-12">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Adarsha Academy.
                All Rights Reserved.
              </p>
            </div>

            {/* Visitor Counter */}
            <div className="col-lg-4 col-md-6">
              <div className="visitor-counter">
                <span className="visitor-label">
                  Visitors
                </span>
                <span className="visitor-number">
                  122269
                </span>
              </div>
            </div>

            {/* Last Updated */}
            <div className="col-lg-3 col-md-6">
              <p className="last-updated">
                Last Updated: 20 September 2026
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;