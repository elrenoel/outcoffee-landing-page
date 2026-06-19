import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
