import React from 'react'
import "./projects.css"
import projectimg1 from "./projectimg1.png"
import gym from "./gym.png"
import food from "./food.png"
import Fade from "react-reveal/Fade"

const Projects = () => {
    return (
        <>
            <div className="container project">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Projects</h2>
                <hr />
                <p className="pb-3 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ad repellat voluptate quas recusandae est praesentium libero. Harum, obcaecati voluptatem.</p>
                <Fade bottom>
                    <div className="row " id='ads'>


                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">HealthMail</span>
                                    <img src={gym} alt="projects" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-details-badge '>Node</span>
                                    <span className='card-details-badge'>Express</span>
                                    <span className='card-details-badge'>React</span>
                                    <span className='card-details-badge'>CSS</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title">
                                        <h5 className='text-uppercase m-auto'>
                                            Interactive BMI Calculator with Sending Mail
                                        </h5>
                                    </div>
                                    <a className='ad-btn text-uppercase' href="https://heartfelt-salamander-d58c63.netlify.app/">view</a>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Explore courses & purchase</span>
                                    <img src={projectimg1} alt="projects" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className='card-details-badge '>Node</span>
                                    <span className='card-details-badge'>Express</span>
                                    <span className='card-details-badge'>React</span>
                                    <span className='card-details-badge'>MongoDB</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title">
                                        <h5 className='text-uppercase m-auto'>
                                            explore courses and purchase
                                        </h5>
                                    </div>
                                    <a className='ad-btn text-uppercase' href="https://github.com/Sharidansari444/explore-courses-and-purchase-">view</a>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Food-Delivery</span>
                                    <img src={food} alt="projects" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    {/* <span className='card-details-badge '>Node</span> */}
                                    <span className='card-details-badge'>Redux</span>
                                    <span className='card-details-badge'>React</span>
                                    <span className='card-details-badge'>Tailwind</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title">
                                        <h5 className='text-uppercase m-auto'>
                                            Food items
                                        </h5>
                                    </div>
                                    <a className='ad-btn text-uppercase' href="https://sparkling-sunflower-4074a0.netlify.app/">view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default Projects