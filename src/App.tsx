import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookDelivery from "./pages/Book";
import TrackOrder from "./pages/Track";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<BookDelivery />} />
        <Route path="track" element={<TrackOrder />} />
        {/* Mock other routes for now */}
        <Route path="how-it-works" element={<div className="p-8 text-center text-2xl font-bold">How It Works Page</div>} />
        <Route path="pricing" element={<div className="p-8 text-center text-2xl font-bold">Pricing Page</div>} />
        <Route path="business" element={<div className="p-8 text-center text-2xl font-bold">For Businesses Page</div>} />
        <Route path="rider" element={<div className="p-8 text-center text-2xl font-bold">Become a Rider Page</div>} />
        <Route path="about" element={<div className="p-8 text-center text-2xl font-bold">About Us Page</div>} />
        <Route path="contact" element={<div className="p-8 text-center text-2xl font-bold">Contact Page</div>} />
        <Route path="faq" element={<div className="p-8 text-center text-2xl font-bold">FAQ Page</div>} />
      </Route>
    </Routes>
  );
}
