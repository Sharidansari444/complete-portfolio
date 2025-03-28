import React from 'react'
import "./techstack.css";
import { techstack } from '../utils/Techstack';
import RubberBand from 'react-reveal/RubberBand'
import Shake from "react-reveal/Shake"

const Techstack = () => {
    return (
        <>
            <div className="container  techstack" >
                <RubberBand>

               
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
                <hr />
                <p className="pb-3 text-center">including, programming, languages , framework , database, front-end and backend tools</p>
                </RubberBand>
                <div className='row'>
                    {
                        techstack.map((tech) => (
                            
                            <div key={tech._id} className="col-md-3">
                                <div className="card m-2">
                                    <div className="card-content">
                                        <Shake>
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center">
                                                
                                                <div className="alig-self-center">

                                                    <tech.icons className='tech-icons' />
                                                </div>
                                                <div className="alig-self-center">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Shake>
                                    </div>
                                </div>

                            </div>

                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Techstack