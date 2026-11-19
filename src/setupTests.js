import "@testing-library/jest-dom";

// Mock global de la API de Little Lemon para todos los tests
window.fetchAPI = jest.fn(() => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]);

window.submitAPI = jest.fn(() => true);

jest.mock(
  "react-router-dom",
  () => ({
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: () => null,
    Link: ({ children, to }) => <a href={to}>{children}</a>,
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);