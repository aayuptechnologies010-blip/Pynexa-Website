import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import GetQuote from './pages/GetQuote';
import Portfolio from './pages/Portfolio';
import CaseStudyDetail from './pages/CaseStudyDetail';
import WhyUs from './pages/WhyUs';
import Founder from './pages/Founder';
import Contact from './pages/Contact';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <Router>
      <Loader />
      <ScrollToTop />
      <div className="bg-brand-navy min-h-screen font-sans selection:bg-brand-primary selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<CaseStudyDetail />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FloatingContact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
