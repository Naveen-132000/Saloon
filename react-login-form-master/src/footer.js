import React from "react";
import "./footer.css"; // Make sure to create a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Salon Info Section */}
      <div className="footer-part salon-info">
        <h2>
          <span className="highlight">S</span>aloon
        </h2>
        <p>
          Welcome to our premium salon, where we offer world-class grooming and
          beauty services. Our skilled professionals ensure you get the best
          service in a luxurious environment.
        </p>
      </div>

      {/* Services Section */}
      <div className="footer-part services">
  <h3>Services</h3>
  <ul>
    <li>
      <i className="fas fa-check-circle"></i> Haircut
    </li>
    <li>
      <i className="fas fa-check-circle"></i> Manicure
    </li>
    <li>
      <i className="fas fa-check-circle"></i> Pedicure
    </li>
    <li>
      <i className="fas fa-check-circle"></i> Facial
    </li>
    <li>
      <i className="fas fa-check-circle"></i> Hair Color
    </li>
    <li>
      <i className="fas fa-check-circle"></i> Makeup
    </li>
  </ul>
</div>




      {/* Contact Information Section */}
     
      <div className="footer-part contact-info">
  <h3>Contact Info</h3>
  <div className="contact-icons">
    <a href="tel:+1234567890" className="icon-link">
      <i className="fas fa-phone"></i>
      <span> +123 456 7890</span>
    </a>
    <a href="https://wa.me/1234567890" className="icon-link">
      <i className="fab fa-whatsapp"></i>
      <span> +123 456 7890</span>
    </a>
    <a href="https://goo.gl/maps/yourlocation" className="icon-link">
      <i className="fas fa-map-marker-alt"></i>
      <span> Location</span>
    </a>
    <a href="mailto:email@example.com" className="icon-link">
      <i className="fas fa-envelope"></i>
      <span> email@example.com</span>
    </a>
  </div>
</div>






      {/* Business Hours Section */}
      <div className="footer-part business-hours">
        <h3>Business Hours</h3>
        <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
        <p>Sat-Sun: 10:00 AM - 5:00 PM</p>
      </div>

      {/* Social Media Icons */}
<div className="social-media">
  <a href="https://facebook.com" className="icon-link">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://instagram.com" className="icon-link">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com" className="icon-link">
    <i className="fab fa-twitter"></i>
  </a>
</div>


    {/* Copyright */}
<div className="copyright">
  <p>&copy; 2024 Saloon. All Rights Reserved.</p>
  <p>Powered by Magnus Copo</p>
</div>

    </footer>
  );
};

export default Footer;