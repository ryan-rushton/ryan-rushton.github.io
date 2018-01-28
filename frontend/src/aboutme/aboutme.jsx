import React from 'react'
import './aboutme.css'
import myDayInfographic from '../static/myDayInfo.png'

const AboutMe = (props) => {
    return (
        <div className="rr-aboutme">
            <div className="rr-infographic">
                <div className="rr-infopraphic-title">
                    My Typical Day
                </div>
                <img className="rr-infographic-img" src={myDayInfographic}/>
            </div>
        </div>)
}

export default AboutMe;