import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm Choose date label", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

  const labelElement = screen.getByText("Choose date");
  //retuns the same array of times for now, i will  probably change
  //this test later to check for the available times in the select dropdown
  expect(labelElement).toBeInTheDocument();
});