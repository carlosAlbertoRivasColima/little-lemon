import "./BookingPage.css";
import BookingForm from "../BookingForm/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <header className="booking-header">
        <h1 id="booking-heading">Reserve a Table</h1>
        <h2>Little Lemon Chicago</h2>
        <p className="lead-text">
          Choose your date, time, and party size to book your table.
        </p>
      </header>

      <div className="booking-container">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;