import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Features from './pages/Features';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/features' element={<Features />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
