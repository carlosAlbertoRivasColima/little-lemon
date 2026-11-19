import { initializeTimes, updateTimes } from "./Main";

const MOCK_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

beforeEach(() => {
  window.fetchAPI = jest.fn(() => MOCK_TIMES);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Booking times reducer helpers", () => {
  test("initializeTimes returns a non-empty array of available times from fetchAPI", () => {
    const result = initializeTimes();

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(MOCK_TIMES);
  });

  test("updateTimes returns updated times for the selected date", () => {
    const initialState = ["17:00", "18:00"];
    const selectedDate = "2026-11-20";
    const action = { type: "UPDATE_TIMES", date: selectedDate };

    const result = updateTimes(initialState, action);

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI).toHaveBeenCalledWith(
      new Date(`${selectedDate}T00:00:00`)
    );
    expect(result).toEqual(MOCK_TIMES);
  });

  test("updateTimes returns existing state for unknown action types", () => {
    const initialState = ["17:00", "18:00"];
    const result = updateTimes(initialState, { type: "UNKNOWN_ACTION" });

    expect(window.fetchAPI).not.toHaveBeenCalled();
    expect(result).toEqual(initialState);
  });
});