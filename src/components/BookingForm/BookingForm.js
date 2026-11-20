import { useEffect, useState } from "react";
import "./BookingForm.css";

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const todayStr = getTodayDateString();

  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0] || "");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
  });

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

  const isDateValid = date !== "" && date >= todayStr;
  const isTimeValid = Boolean(time) && availableTimes.includes(time);
  const isGuestsValid =
    Number.isInteger(guests) && guests >= 1 && guests <= 10;

  const isFormValid = isDateValid && isTimeValid && isGuestsValid;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTouched((prev) => ({ ...prev, date: true }));
    if (selectedDate) {
      dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    }
  };

  const handleGuestsChange = (e) => {
    const rawValue = e.target.value;
    setGuests(rawValue === "" ? "" : Number(rawValue));
    setTouched((prev) => ({ ...prev, guests: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true });

    if (!isFormValid) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min={todayStr}
          value={date}
          onChange={handleDateChange}
          onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
          aria-invalid={!isDateValid && touched.date}
          aria-describedby={
            !isDateValid && touched.date ? "date-error" : undefined
          }
          required
        />
        {!isDateValid && touched.date && (
          <span id="date-error" className="form-error" role="alert">
            {date === ""
              ? "Please select a reservation date."
              : "Date cannot be in the past."}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setTouched((prev) => ({ ...prev, time: true }));
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
          aria-invalid={!isTimeValid && touched.time}
          aria-describedby={
            !isTimeValid && touched.time ? "time-error" : undefined
          }
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {!isTimeValid && touched.time && (
          <span id="time-error" className="form-error" role="alert">
            Please select an available time.
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          step="1"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
          aria-invalid={!isGuestsValid && touched.guests}
          aria-describedby={
            !isGuestsValid && touched.guests ? "guests-error" : undefined
          }
          required
        />
        {!isGuestsValid && touched.guests && (
          <span id="guests-error" className="form-error" role="alert">
            Number of guests must be between 1 and 10.
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn-primary booking-submit"
        aria-label="On Click"
        disabled={!isFormValid}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;