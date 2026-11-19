import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>
        Your table at Little Lemon Chicago has been reserved. We look forward to
        welcoming you!
      </p>
      <Link to="/" className="btn-primary confirmed-booking__btn">
        Back to Home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;