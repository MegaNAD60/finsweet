import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Features from './pages/Features';
import { useState } from 'react';


function App() {

  const [showbtn, setShowbtn] = useState(false);

  const whenScroll = () => {
    if(window.scrollY > 300){
      setShowbtn(true)
    }else{
      setShowbtn(false)
    }
  }

  window.addEventListener('scroll', whenScroll)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <Nav />
      <button className={showbtn ? 'fixed bottom-3 right-3 lg:right-40 lg:bottom-10 py-2 px-2 bg-[#13153d] text-white rounded-md z-10' : 'hidden' } onClick={scrollTop} onScroll={whenScroll}>Top</button>
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
