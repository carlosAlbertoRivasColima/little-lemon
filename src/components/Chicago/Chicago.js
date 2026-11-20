import chefsA from "../../assets/Mario and Adrian A.jpg";
import chefsB from "../../assets/Mario and Adrian b.jpg";
import "./Chicago.css";

function Chicago() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-content">
        <h2 id="about-heading">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago.
        </p>
      </div>

      <div className="about-images">
        <img
          src={chefsB}
          alt="Mario and Adrian smiling"
          className="about-img-back"
        />
        <img
          src={chefsA}
          alt="Mario and Adrian cooking"
          className="about-img-front"
        />
      </div>
    </section>
  );
}

export default Chicago;