import IntroSection from "../IntroSection/IntroSection";
import albonyc from "../../assets/images/albonyc.jpg";
import "./About.css";

function About() {
  return (
    <>
      <IntroSection />
      <section className="about">
        <p>
          The Little Lemon was founded by Mario and Adrians father, Gjergji, an
          immigrant from the Italo-Albanian community, when arriving in New
          York, he shortly after opened his own small restaurant to server his
          local Albanian community in the Bronx. Years later after hard work and
          success, Mario and Adrian have expanded they're restaurant in mid-town
          Manhattan and are happy to serve unique Meditterean food from all over
          the world!
        </p>
        <img src={albonyc} alt="Albanian-American Community" />
      </section>
    </>
  );
}

export default About;
