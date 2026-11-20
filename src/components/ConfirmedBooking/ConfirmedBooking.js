import { Link, useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  const location = useLocation();
  const bookingData = location.state;

  return (
    <section
      className="confirmed-booking"
      role="status"
      aria-live="polite"
      aria-labelledby="confirmed-heading"
    >
      <h1 id="confirmed-heading">Booking Confirmed!</h1>
      <p>
        Your table at Little Lemon Chicago has been reserved. We look forward to
        welcoming you!
      </p>

      {bookingData && (
        <dl className="booking-summary" aria-label="Reservation details">
          <div className="booking-summary__item">
            <dt>Date</dt>
            <dd>{bookingData.date}</dd>
          </div>
          <div className="booking-summary__item">
            <dt>Time</dt>
            <dd>{bookingData.time}</dd>
          </div>
          <div className="booking-summary__item">
            <dt>Guests</dt>
            <dd>
              {bookingData.guests}{" "}
              {bookingData.guests === 1 ? "person" : "people"}
            </dd>
          </div>
          <div className="booking-summary__item">
            <dt>Occasion</dt>
            <dd>{bookingData.occasion}</dd>
          </div>
        </dl>
      )}

      <Link to="/" className="btn-primary confirmed-booking__btn">
        Back to Home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;