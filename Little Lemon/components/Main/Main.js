import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Booking from "../BookingPage/BookingPage";
import About from "../About/About";
import ConfirmPage from "../ConfirmPage/ConfirmPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="confirm" element={<ConfirmPage />} />
      </Routes>
    </main>
  );
}

export default Main;
