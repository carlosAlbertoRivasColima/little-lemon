import { Link } from "react-router-dom";
import heroImg from "../../assets/restauranfood.jpg";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="lead-text">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn-primary">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Little Lemon signature dish" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;