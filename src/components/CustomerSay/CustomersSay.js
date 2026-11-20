import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import "./CustomersSay.css";

const testimonialsData = [
  {
    id: 1,
    rating: "⭐⭐⭐⭐⭐",
    starsCount: 5,
    name: "Edgar A",
    image: avatar1,
    review: "Best Mediterranean food in Chicago! The Greek salad is always fresh.",
  },
  {
    id: 2,
    rating: "⭐⭐⭐⭐",
    starsCount: 4,
    name: "Carlos R.",
    image: avatar2,
    review: "Good food but it gets crowded during weekends. Make sure to book in advance.",
  },
  {
    id: 3,
    rating: "⭐⭐⭐",
    starsCount: 3,
    name: "Elena G.",
    image: avatar3,
    review: "It was good but I expected more variety in the menu. The bruschetta was delicious though.",
  },
  {
    id: 4,
    rating: "⭐⭐⭐⭐⭐",
    starsCount: 5,
    name: "Maria S.",
    image: avatar4,
    review: "The bruschetta is a must-try. Will definitely come back with family.",
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((item) => (
          <article key={item.id} className="card testimonial-card">
            <span
              className="rating"
              role="img"
              aria-label={`${item.starsCount} out of 5 stars`}
            >
              {item.rating}
            </span>
            <div className="testimonial-user">
              <img src={item.image} alt={item.name} className="testimonial-avatar" />
              <h4>{item.name}</h4>
            </div>
            <p>{item.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;