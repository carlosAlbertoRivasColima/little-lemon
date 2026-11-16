import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="header-logo" />
      <Nav />
    </header>
  );
}

export default Header;