import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import EventsPage from "../pages/EventsPages";
import OpportunitiesPage from "../pages/OpportunitiesPage";
import MainLayout from "../components/layout/MainLayout";



export default function Index() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/oportunidades" element={<OpportunitiesPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
