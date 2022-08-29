import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Personal from './pages/Personal';
import Projects from './pages/Projects';
import {Route, Routes} from "react-router-dom"

function App() {
  
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
