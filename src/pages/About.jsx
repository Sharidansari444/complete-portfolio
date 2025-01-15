
import "./about.css"
import sharid from "../components/Menu/sharid.jpg"

const About = () => {
  return (
    <div>
        <div className="about" id="about">
            <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6  col-xs-12 about-img">
                    <img  src={sharid } alt="" />
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6  col-xs-12 about-content">
                      <h1>About me</h1>
                      <p>
                      I&lsquo;m Sharid Ansari, a student at the RADHARAMAN GROUP OF INSTITUTES in Bhopal. I have expertise with the MERN stack (MongoDB, Express.js, React, and Node.js) and am a Full-Stack Developer. I like creating quick, easy-to-use web apps, and I concentrate on writing clear, effective code. I&rsquo;m constantly picking up new abilities and trying to get better. Let&rsquo;s get in touch if you need assistance making your web initiatives a reality!
                      </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About