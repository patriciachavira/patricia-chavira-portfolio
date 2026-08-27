import AIPestIdTool from "./pages/AIPestIdTool";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AgenticCHRO from './pages/AgenticCHRO';
import BoardMember from './pages/BoardMember';
import NewsMedia from './pages/NewsMedia';
import AIPestID from './pages/AIPestID';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Case Study 01 */}
        <Route path="/case-study-01" element={<AgenticCHRO />} />
        <Route path="/case-study/agentic-chro" element={<AgenticCHRO />} />
        
        {/* Case Study 02 */}
        <Route path="/case-study-02" element={<BoardMember />} />
        <Route path="/case-study/board-member" element={<BoardMember />} />
        
        {/* Case Study 03 */}
        <Route path="/case-study-03" element={<NewsMedia />} />
        <Route path="/case-study/news-media" element={<NewsMedia />} />
        
        {/* Case Study 04 */}
        <Route path="/case-study-04" element={<AIPestID />} />
        <Route path="/case-study/ai-pest-id" element={<AIPestIdTool />} />
        <Route path="/case-study/ai-pest-id" element={<AIPestIdTool />} />
      </Routes>
    </Router>
  );
}
