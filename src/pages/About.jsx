
import "./about.css"
import sharid from "../components/Menu/sharid.jpg"

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6  col-xs-12 about-img">
            <img src={sharid} alt="" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6  col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I&apos;m Muhammad Sharid Ansari, a passionate Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I build scalable, efficient, and user-friendly web applications with clean code and modern design practices.

              I recently completed my Bachelor of Technology from Radharaman Group of Institutes and have hands-on experience developing real-world projects, including course purchasing platforms, food delivery interfaces, and rating systems with role-based access.

              My focus is always on delivering practical, responsive, and performance-optimized solutions. I enjoy solving problems, learning new technologies, and continuously improving my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About