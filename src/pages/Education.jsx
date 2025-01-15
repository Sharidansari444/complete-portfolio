import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import "./education.css"
const Education = () => {
    return (
        <>
            <div className="container education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education details</h2>
                <hr />
                <VerticalTimeline lineColor='#138781'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'balck' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2015 - 2019"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Class 10th & 12th</h3>
                        <h6 className="vertical-timeline-element-subtitle text-uppercase">Baba kaleshwar nath enter college</h6>
                        <p>
                            Uttar pradesh board
                        </p>
                    </VerticalTimelineElement >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'balck' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2021 - 2025"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">B.Tech</h3>
                        <h6 className="vertical-timeline-element-subtitle text-uppercase">RADHARAMAN GROUP OF INSTITUDE BHOPAL</h6>
                        <p>
                            Uttar pradesh board
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education