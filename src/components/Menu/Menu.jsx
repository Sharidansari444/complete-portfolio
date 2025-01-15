
import sharid from "./sharid.jpg"
import "./Menu.css"
import { FcHome } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade"
import { FcAbout } from 'react-icons/fc';
import { GrTechnology } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";

import { Link, } from 'react-scroll';





// eslint-disable-next-line react/prop-types
const Menu = ({ toggle }) => {
    return (
        <>

            {toggle ? (
                <>
                    <Zoom>

                        <div className="navbar-profile-pice">
                            <img src={sharid} alt="" />
                        </div>
                    </Zoom>
                    <Fade left>


                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <p> <FcHome />Home</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >

                                        <p> <FcAbout /> About</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                       
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >

                                        <p> <MdCastForEducation className="text-warning" /> Education</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="techstack"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}

                                    >
                                        <p>  <GrTechnology className=" text-info" /> Tech Stack</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}

                                    >
                                        <p> <GrProjects className="text-secondary" /> Projects</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}

                                    >

                                        <p> <IoMdContacts className="text-info" />  Contact</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>

            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}

                                >

                                    <p> <FcHome /></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}

                                >

                                    <p> <FcAbout /> </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}

                                >

                                    <p> <MdCastForEducation className="text-warning" /> </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="techstack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}

                                >

                                    <p>  <GrTechnology className=" text-info" /> </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}

                                >

                                    <p> <GrProjects className="text-secondary" /> </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}

                                >

                                    <p> <IoMdContacts className="text-info" /></p>
                                </Link>
                            </div>
                        </div>

                    </div>

                </>

            )

            }

        </>
    )
}

export default Menu