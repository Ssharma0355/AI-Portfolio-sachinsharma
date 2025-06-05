import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/ContactInfo/Contact';
import WorkExp from './Components/WorkExp/WorkExp';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workexperience" element={<WorkExp />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
