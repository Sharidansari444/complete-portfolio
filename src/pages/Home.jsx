// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./home.css"
import Typewriter from 'typewriter-effect';
import resume from "../assets/doc/MuhammadSharidAnsariResume_page-0001.jpg"
import { useTheme } from '../context/ThemeContext';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import Fade from "react-reveal/Fade"


const Home = () => {
  const [theme, setTheme] = useTheme()

  const handltheme = () => {
    setTheme((PrevesState) => (PrevesState === "light" ? "dark" : "light"))
  }

  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handltheme}>
          {theme === 'light' ? (<BsFillMoonStarsFill size={20} />) : (<GoSun size={25} />)}
        </div>
        <div className="container home-content "  >
          <Fade right>
        

            <h1>Hi I&apos;m a </h1>
            <h2>

              <Typewriter
                options={{
                  strings: [
                    'FullStack Developer !',
                    ' MERN Stack Developer!',
                    "Backend developer !"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
          <Fade bottom>


            <div className="home-buttons">
              <a className=' btn-hire btn btn-outline-warning' href='http://api.whatsapp.com/send?phone=8922887628'
              rel='noreferrel'
              target='_blank'
               >Hire me</a>
             
              <a href={resume} download="sharid.jpg" className=' btn-resume btn btn-outline-warning'>My Resume</a>

            </div>
          </Fade>
        </div>

      </div>

    </>
  )
}

export default Home