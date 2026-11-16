import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <img src={logo} alt="Little Lemon Logo" className="footer-logo" />

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>123 Mediterranean Ave, Chicago, IL</li>
            <li>(312) 555-0198</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X / Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;