import IntroSection from "../IntroSection/IntroSection";
import trilece from "../../assets/images/trilece.jpg";
import albores from "../../assets/images/albores.jpg";
import openhours from "../../assets/images/openhours.jpg";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <IntroSection />
      <section className="week-special">
        <h2>Everything new happening at The Little Lemon!</h2>
        <div className="specials-container">
          <div className="specials">
            <img src={trilece} alt="trilece" />
            <div className="name-price">
              <h3>Trilece</h3>
              <h3 className="price">$5.00</h3>
            </div>
            <p>
              After Adrians trip to Albania and his completion of the special
              training program, we are happy to introduce the Albanian dessert
              Trilece!
            </p>
          </div>
          <div className="specials">
            <img src={albores} alt="Albanian Restaurant interior" />
            <div className="name-price">
              <h3>New interior</h3>
            </div>
            <p>
              We are happy to annouce that after Adrians trip to Albania, The
              Little Lemon has decorated its interior to resemble traditional
              Albanian culture
            </p>
          </div>
          <div className="specials">
            <img src={openhours} alt="Opening Hours" />
            <div className="name-price">
              <h3>Opening and Closing Hours</h3>
              <h3 className="price">9am-12am</h3>
            </div>
            <p>
              The Little Lemon is open from 9am to 12am, please reserve a table
              ahead of time we we may accomodate you accordingly.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
