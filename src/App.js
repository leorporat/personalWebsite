import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Personal from './pages/Personal';
import Projects from './pages/Projects';

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = About;
      break
    case "/education":
      Component = Education;
       break
    case "/personal":
      Component = Personal;
      break
    case "/projects":
      Component = Projects;
      break

  }
  return (
    <div>
      <Navbar />
      <Component />
    </div>
    
  );
}

export default App;
