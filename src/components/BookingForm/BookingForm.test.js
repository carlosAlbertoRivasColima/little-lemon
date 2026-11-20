import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const MOCK_TIMES = ["17:00", "18:00", "19:00"];

function getFutureDateString(daysAhead = 2) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

describe("BookingForm", () => {
  test("renders the Choose date label", () => {
    render(<BookingForm availableTimes={MOCK_TIMES} dispatch={jest.fn()} />);

    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });

  describe("validating html 5 attributes", () => {
    test("applies required and min attributes to date input", () => {
      render(<BookingForm availableTimes={MOCK_TIMES} dispatch={jest.fn()} />);

      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute("type", "date");
      expect(dateInput).toBeRequired();
      expect(dateInput).toHaveAttribute("min");
    });

    test("applies required attribute to time select", () => {
      render(<BookingForm availableTimes={MOCK_TIMES} dispatch={jest.fn()} />);

      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toBeRequired();
    });

    test("applies required, min, max, and step attributes to guests input", () => {
      render(<BookingForm availableTimes={MOCK_TIMES} dispatch={jest.fn()} />);

      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute("type", "number");
      expect(guestsInput).toBeRequired();
      expect(guestsInput).toHaveAttribute("min", "1");
      expect(guestsInput).toHaveAttribute("max", "10");
      expect(guestsInput).toHaveAttribute("step", "1");
    });
  });

  describe("Client side validation states and submission", () => {
    test("disables submit button initially and shows error when date is blurred with empty value", () => {
      render(
        <BookingForm
          availableTimes={MOCK_TIMES}
          dispatch={jest.fn()}
          submitForm={jest.fn()}
        />
      );

      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      expect(submitButton).toBeDisabled();

      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.blur(dateInput);

      expect(
        screen.getByText(/please select a reservation date/i)
      ).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    test("shows error and keeps submit disabled when guests is less than 1 or greater than 10", () => {
      render(
        <BookingForm
          availableTimes={MOCK_TIMES}
          dispatch={jest.fn()}
          submitForm={jest.fn()}
        />
      );

      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });

      fireEvent.change(guestsInput, { target: { value: "0" } });
      fireEvent.blur(guestsInput);
      expect(
        screen.getByText(/number of guests must be between 1 and 10/i)
      ).toBeInTheDocument();
      expect(submitButton).toBeDisabled();

      fireEvent.change(guestsInput, { target: { value: "11" } });
      fireEvent.blur(guestsInput);
      expect(
        screen.getByText(/number of guests must be between 1 and 10/i)
      ).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });

    test("enables submit button and calls submitForm with valid data", () => {
      const dispatchMock = jest.fn();
      const submitFormMock = jest.fn();
      const validDate = getFutureDateString(3);

      render(
        <BookingForm
          availableTimes={MOCK_TIMES}
          dispatch={dispatchMock}
          submitForm={submitFormMock}
        />
      );

      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/occasion/i);
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });

      fireEvent.change(dateInput, { target: { value: validDate } });
      fireEvent.change(timeSelect, { target: { value: "18:00" } });
      fireEvent.change(guestsInput, { target: { value: "4" } });
      fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

      expect(submitButton).toBeEnabled();
      fireEvent.click(submitButton);

      expect(dispatchMock).toHaveBeenCalledWith({
        type: "UPDATE_TIMES",
        date: validDate,
      });
      expect(submitFormMock).toHaveBeenCalledWith({
        date: validDate,
        time: "18:00",
        guests: 4,
        occasion: "Anniversary",
      });
    });
  });
});