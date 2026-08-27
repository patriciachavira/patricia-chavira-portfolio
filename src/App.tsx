import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AgenticCHRO from './pages/AgenticCHRO';
import BoardMember from './pages/BoardMember';
import NewsMedia from './pages/NewsMedia';
import AIPestID from './pages/AIPestID';
import AIPestIdTool from './pages/AIPestIdTool';

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
        <Route path="/case-study/news-media" element={<NewsMedia />} />

        {/* Case Study 04 */}
        <Route path="/case-study/ai-pest-id" element={<AIPestID />} />
        <Route path="/pest-id-tool" element={<AIPestIdTool />} />
      </Routes>
    </Router>
  );
}
