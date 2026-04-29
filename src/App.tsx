import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookDelivery from "./pages/Book";
import TrackOrder from "./pages/Track";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Business from "./pages/Business";
import Rider from "./pages/Rider";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<BookDelivery />} />
        <Route path="track" element={<TrackOrder />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="business" element={<Business />} />
        <Route path="rider" element={<Rider />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}
