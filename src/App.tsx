import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Routes, Route} from 'react-router-dom'
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: false,
      mirror: true,
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', refreshAOS);

    return () => window.removeEventListener('scroll', refreshAOS);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-0">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

/*
<Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
*/