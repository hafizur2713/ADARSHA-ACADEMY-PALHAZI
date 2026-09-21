import { Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Home Components
import Hero from "./components/Hero/Hero";
import NoticePreview from "./components/NoticePreview/NoticePreview";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import ResultsCarousel from "./components/ResultsCarousel/ResultsCarousel";
import FacultyCarousel from "./components/FacultyCarousel/FacultyCarousel";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import GalleryPreview from "./components/GalleryPreview/GalleryPreview";
import AdmissionBanner from "./components/AdmissionBanner/AdmissionBanner";
import Testimonials from "./components/Testimonials/Testimonials";

// Pages
import About from "./pages/about/About";
import Academics from "./pages/academics/Academics";
import Gallery from "./pages/gallery/Gallery";
import Results from "./pages/results/Results";
import Faculty from "./pages/faculty/Faculty";
import Notice from "./pages/notice/Notice";
import InfrastructurePage from "./pages/infrastructure/Infrastructure";
import Admission from "./pages/admission/Admission";
import Contact from "./pages/contact/Contact";

// ========================================
// HOME PAGE
// ========================================

function Home() {
  return (
    <>
      <Hero />

      <NoticePreview />

      <WelcomeSection />

      <ResultsCarousel />

      <FacultyCarousel />

      <Infrastructure />

      <GalleryPreview />

      <AdmissionBanner />

      <Testimonials />
    </>
  );
}


// ========================================
// TEMPORARY PAGE
// ========================================

function ComingSoon({ title }) {
  return (
    <section className="coming-soon-section">
      <div className="container text-center">
        <h1>{title}</h1>
        <p>This page is under development.</p>
      </div>
    </section>
  );
}


// ========================================
// MAIN APP
// ========================================

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/about" element={<About />} />

          <Route path="/academics" element={<Academics />} />

          <Route
            path="/infrastructure"
            element={<InfrastructurePage />}
          />

          <Route path="/gallery" element={<Gallery />} />

          {/* Temporary Pages */}
          <Route
            path="/faculty"
            element={<Faculty />}
          />

          <Route
            path="/results"
            element={<Results />}
          />

          <Route
            path="/notice"
            element={<Notice />}
          />

          <Route
            path="/admission"
            element={<Admission />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Page Not Found */}
          <Route
            path="*"
            element={<ComingSoon title="Page Not Found" />}
          />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;