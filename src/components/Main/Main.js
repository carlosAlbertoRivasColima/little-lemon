import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import BookingPage from "../BookingPage/BookingPage";

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      //retuns the same array of times for now
      return initializeTimes();
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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;