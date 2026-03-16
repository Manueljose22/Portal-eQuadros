import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import EventsPage from "../pages/EventsPages";



export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/eventos" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
