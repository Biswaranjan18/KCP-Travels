import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import BookCar from "./pages/BookCar";
import CustomTour from "./pages/CustomTour";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";
import TourHighlights from "./components/TourHighlights";
import ScrollToTop from "./components/ScrollToTop";
import CallbackPopup from './components/CallbackPopup'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop /> {/* Add this at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/book-car" element={<BookCar />} />
        <Route path="/custom-tour" element={<CustomTour />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/package_details/:id" element={<PackageDetails />} />
        <Route path="/tour-highlights" element={<TourHighlights />} />
      </Routes>
      <Footer />
      <CallbackPopup/>
      <FloatingContactButtons />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
