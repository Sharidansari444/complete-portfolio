import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { RiMenuFold3Fill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";
import { FcAbout } from 'react-icons/fc';
import { GrTechnology } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";

import { Link, } from 'react-scroll';
import "./mobilenav.css"

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    const handleopen = () => {
        setOpen(!open)
    }

    const handleMenuClick = () =>{
        setOpen(false)
    }
    return (
        <>
            <div className="mobile-nav"> 
                <div className="mobile-nav-headers">
                    {open ? (<RiMenuFold3Fill onClick={handleopen} size={30} className="mobile-nav-icon" />) : 
                    (<MdMenu className="mobile-nav-icon" size={30} onClick={handleopen} />)

                    }
                    <span className='mobile-nav-title'>MY Portfolio</span>
                </div>
                {open && ( <div className="mobile-nav-menu">
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}
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
                                    onClick={handleMenuClick}
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
                                    to="techstack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                    onClick={handleMenuClick}

                                >
                                    <p>  <GrTechnology className=" text-info" /> Tech Stack</p>
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
                                    onClick={handleMenuClick}
                                >

                                    <p> <MdCastForEducation className="text-warning" /> Education</p>
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
                                    onClick={handleMenuClick}

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
                                    onClick={handleMenuClick}

                                >

                                    <p> <IoMdContacts className="text-info" />  Contact</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>) 
                }
               
            </div>
        </>
    )
}

export default MobileNav