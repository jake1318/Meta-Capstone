import { useNavigate } from "react-router-dom";
import arbereshflag from "../../assets/images/arbereshflag.png";
import "./IntroSection.css";

function IntroSection() {
  const navigate = useNavigate();

  function navigateToBooking() {
    navigate("/booking");
  }

  return (
    <section className="intro-section">
      <div className="intro-container">
        <h1>Little Lemon</h1>
        <p>
          The Little Lemon is a restaurant that serves traditional Meditterean
          Food from around the world, Recently Adrian, the Owner has come back
          from his training camp in Albania and is excited to introduce
          Authentic Albanian food at Little Lemon!
        </p>
        <button onClick={navigateToBooking} aria-label="Go to booking page">
          Reserve a Table
        </button>
      </div>
      <div className="image-container">
        <img
          src={arbereshflag}
          alt="Table in restaurant"
          className="table-image"
        />
      </div>
    </section>
  );
}

export default IntroSection;
