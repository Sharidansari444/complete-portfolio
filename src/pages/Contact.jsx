import React, { useState } from 'react'
import "./contact.css"
import contact from "./contact.jpg"
import Fade from "react-reveal/Fade"
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    // const [mail, setMail] = useState("")
    const mailhandler = async(e) => {
        e.preventDefault()
        
        try {
            if(!name || !email || !message){
                toast.error("please field all input")
            }
            axios.post("https://complete-portfolio-1dv4.onrender.com/api/v1/portfolio/sendemail",{name , email , message},{
                "Content-Type":"application/json"
            }).then((res)=>{
                console.log(res)
                toast.success(res.data.message)
                setEmail("")
                setMessage("")
                setName("")
            }).catch((error)=>{
                console.log(error)
                toast.success(error.data.message)
            })

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <div className=" contact" id='contact'>
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src={contact} alt="contact " className='image' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">

                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <Fade top>

                                        <h6>Contact With
                                            <FaLinkedin color='blue' size={30} className='ms-2' />
                                            <FaGithub color='black' size={30} className='ms-2' />
                                            <FaFacebook color='blue' size={30} className='ms-2' />
                                            <FaInstagramSquare color='#E1306C' size={30} className='ms-2' />


                                        </h6>
                                    </Fade>

                                    <div className="row px-3 mb-4 ms-1">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />

                                    </div>
                                </div>
                                <Fade right>
                                    <div className="row px-3">
                                        <input type="text"
                                            value={name}
                                            name='name'
                                            placeholder='enter your name'
                                            className='mb-3'
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </Fade>
                                <Fade right>

                                    <div className="row px-3">
                                        <input type="email"
                                            name='email'
                                            value={email}
                                            placeholder='Enter your email'
                                            className='mb-3'
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </Fade>
                                <Fade right>

                                    <div className="row px-3">
                                        <textarea type="text"
                                            name='message'
                                            placeholder='Write your message'
                                            className='mb-3' value={message}
                                            onChange={(e) => setMessage(e.target.value)} />
                                    </div>
                                </Fade>
                                <Fade right>
                                    <div className="row px-3">
                                        <button  onClick={mailhandler} className='button'>Send message </button>
                                    </div>
                                </Fade>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact