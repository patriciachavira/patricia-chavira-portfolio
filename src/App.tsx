import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import CaseStudy01 from './pages/CaseStudy01';
import CaseStudy02 from './pages/CaseStudy02';
import CaseStudy03 from './pages/CaseStudy03';
import CaseStudy04 from './pages/CaseStudy04';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-1" element={<CaseStudy01 />} />
        <Route path="/case-study-2" element={<CaseStudy02 />} />
        <Route path="/case-study-3" element={<CaseStudy03 />} />
        <Route path="/case-study-4" element={<CaseStudy04 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
