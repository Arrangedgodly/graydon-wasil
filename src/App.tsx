import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import $ from "jquery";
import "jquery-scrollify";

const App = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "business"
  );

  const mainContainer = document.querySelector(".main-text");

  const handleThemeChange = (name: string) => {
    mainContainer?.classList.remove(`bg-${theme}`);
    setTheme(name);
    mainContainer?.classList.add(`bg-${name}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable: "mobile",
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 500,
      once: false,
      mirror: true,
      anchorPlacement: "center-center",
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", refreshAOS);

    return () => window.removeEventListener("scroll", refreshAOS);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme === null) {
      setTheme("business");
    }
  }, [theme]);

  useEffect(() => {
    ($ as any).scrollify({
      section: ".section",
      scrollSpeed: 2000,
      scrollbars: false,
      updateHash: false,
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen p-0 scroll-smooth bg-base-300 fill-base-100 text-neutral-content main-text bg-business overflow-x-hidden"
      data-theme={theme}
    >
      <Header theme={theme} />
      <ParallaxProvider>
        <Projects />
        <About />
        <Tools />
        <Contact />
      </ParallaxProvider>
      <Footer handleThemeChange={handleThemeChange} />
    </div>
  );
};

export default App;
