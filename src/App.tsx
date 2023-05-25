import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"
import Tools from "./components/Tools"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from "react"
import 'theme-change';

const App = () => {
  const [theme, setTheme] = useState('business');
  useEffect(() => {
    AOS.init({
      duration : 2000,
      delay: 500,
      once: false,
      mirror: true,
      anchorPlacement: 'center-center'
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', refreshAOS);

    return () => window.removeEventListener('scroll', refreshAOS);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-0 scroll-smooth bg-base-300 text-neutral-content" data-theme={theme}>
      <Header />
      <Projects />
      <About />
      <Tools />
      <Contact />
      <Footer setTheme={setTheme} />
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