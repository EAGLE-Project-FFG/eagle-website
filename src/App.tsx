import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import PartnersPage from "./pages/PartnersPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";
import ResultsPage from "./pages/ResultsPage";
import ImprintPage from "./pages/ImprintPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/imprint" element={<ImprintPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
