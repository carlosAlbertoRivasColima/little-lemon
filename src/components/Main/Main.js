import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import BookingPage from "../BookingPage/BookingPage";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";

export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return window.fetchAPI(new Date(action.date + "T00:00:00"));
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted = window.submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
export default Main;