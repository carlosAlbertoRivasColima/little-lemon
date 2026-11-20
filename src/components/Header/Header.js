import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Little Lemon Home" className="header-logo-link">
        <img src={logo} alt="Little Lemon Logo" className="header-logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;