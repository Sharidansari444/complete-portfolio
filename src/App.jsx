import Layout from "./components/Layout/Layout"
import { useTheme } from "./context/ThemeContext"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import Techstack from "./pages/Techstack"
import ScrollToTop from "react-scroll-to-top";
import "./app.css"
import Tada from "react-reveal/Tada"
import MobileNav from "./components/MobileNav/MobileNav"
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [theme] = useTheme()

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Contact />
        </div>
        <Tada>
          <div className="footer pb-3 ms-3">
            <h5 className="text-center">Design and 🥰 Developer by Sharid Ansari</h5>
          </div>
        </Tada>
      </div>
      <ScrollToTop
        smooth
        color="white"
        className=" bg-black border rounded"
      />
    </>
  )
}

export default App
