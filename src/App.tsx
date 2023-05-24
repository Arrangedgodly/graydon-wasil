import Header from "./components/Header"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-0">
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
