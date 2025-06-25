import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudentLoan from './pages/StudentLoan';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Community from './pages/Community';
import CountryLoans from './pages/CountryLoans';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student-loan" element={<StudentLoan />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/community" element={<Community />} />
            <Route path="/country-loans" element={<CountryLoans />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;