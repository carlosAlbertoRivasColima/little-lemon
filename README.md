# Little Lemon Restaurant — Meta Front-End Developer Capstone

Web application for **Little Lemon Chicago**, a family-owned Mediterranean restaurant, built as the capstone project for the **Meta Front-End Developer Professional Certificate**. The application features a landing page with weekly specials, customer testimonials, and the restaurant's story, paired with an interactive table booking flow, a reservation summary confirmation page, accessibility enhancements, and unit tests.

## Key Features

- **Home Page (`/`):**
  - **Hero / Call to Action (`CallToAction`):** Introduces Little Lemon Chicago and provides a direct call to action to book a table.
  - **Weekly Specials (`Specials`):** Highlights featured dishes (*Greek Salad*, *Bruschetta*, *Lemon Dessert*) with prices, descriptions, and delivery links.
  - **Testimonials (`CustomersSay`):** Displays customer reviews and star ratings in a responsive card grid.
  - **About (`Chicago`):** Shares the story of founders Mario and Adrian alongside layered photography.
- **Table Booking Flow (`/booking`):**
  - Dynamically updates available time slots via `useReducer` (`initializeTimes` and `updateTimes`) integrated with `fetchAPI` and `submitAPI`.
  - Includes HTML5 attributes and client-side validation for reservation date (preventing past dates), available time, number of guests (`1` to `10`), and occasion (*Birthday*, *Anniversary*).
- **Booking Confirmation (`/confirmed`):**
  - Shows a confirmation status message along with a semantic summary (`<dl>`, `<dt>`, `<dd>`) of the submitted reservation details via router navigation state.
- **Accessibility Enhancements:**
  - Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) and a single `<h1>` per view while preserving visual hierarchy.
  - Explicit form labels (`<label htmlFor="...">` mapped to input/select `id` attributes), `aria-invalid`, `aria-describedby`, `role="alert"`, `role="status"`, and `aria-label` attributes (including `aria-label="On Click"` on the booking submit button).

## Tech Stack

- **React** (`useState`, `useEffect`, `useReducer`)
- **React Router** (`Routes`, `Route`, `Link`, `useNavigate`, `useLocation`)
- **CSS3** (Custom CSS variables, Grid & Flexbox layouts, responsive media queries)
- **Jest & React Testing Library** for component and form validation tests

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm. The project uses Create React App through `react-scripts`.

### Install dependencies

Clone the repository and install the dependencies listed in `package-lock.json`:

```bash
git clone https://github.com/carlosAlbertoRivasColima/little-lemon.git
cd little-lemon
npm ci
```

You can use `npm install` instead if you do not want to install from the lockfile.

### Run the project

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads when you make changes.

### Run the tests

Run the test suite once (useful for CI):

```bash
npm test -- --watchAll=false
```

To run tests in interactive watch mode instead:

```bash
npm test
```

## Project Structure

```text
little-lemon/
├── public/                 # Static files served by the app
├── src/
│   ├── assets/             # Images and logo
│   ├── components/         # Page sections and booking components
│   │   ├── BookingForm/
│   │   ├── BookingPage/
│   │   ├── CallToAction/
│   │   ├── Chicago/
│   │   ├── ConfirmedBooking/
│   │   ├── CustomerSay/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HomePage/
│   │   ├── Main/
│   │   ├── Nav/
│   │   └── Specials/
│   ├── App.js              # App routes
│   ├── index.js            # React entry point
│   └── setupTests.js       # Testing Library setup
├── package.json            # Dependencies and npm scripts
└── package-lock.json       # Locked dependency versions
