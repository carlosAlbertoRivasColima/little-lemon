function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
      </ul>
    </footer>
  );
}

export default Footer;