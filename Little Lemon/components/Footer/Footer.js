import "./Footer.css";
import footerlogo from "../../assets/images/footerlogo.png";
function Footer() {
  return (
    <footer>
      <img src={footerlogo} alt="Footer logo" />
      <p>&copy; Little Lemon</p>
    </footer>
  );
}
export default Footer;
