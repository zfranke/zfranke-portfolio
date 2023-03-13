import Navbar from './comps/navbar';
import Home from './comps/home';
import About from './comps/about';
import Projects from './comps/project';
import Contact from './comps/contact';
import Skills from './comps/skills';
import Container from '@mui/material/Container';
import Footer from './comps/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
