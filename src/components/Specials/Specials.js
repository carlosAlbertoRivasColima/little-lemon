import { Link } from "react-router-dom";
import greekSaladImg from "../../assets/greek salad.jpg";
import bruschettaImg from "../../assets/bruchetta.svg";
import lemonDessertImg from "../../assets/lemon dessert.jpg";
import "./Specials.css";

const specialsData = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSaladImg,
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruschettaImg,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessertImg,
  },
];

function Specials() {
  return (
    <section className="specials-section" id="menu">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <Link to="/order" className="btn-primary">
          Online Menu
        </Link>
      </div>

      <div className="grid-section">
        {specialsData.map((item) => (
          <article key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <div className="card-header">
                <h4>{item.title}</h4>
                <span className="highlight-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <Link to="/order" className="card-link">
                Order a delivery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;