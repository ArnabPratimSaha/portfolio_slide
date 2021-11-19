import React from 'react'
import './aboutMe.css';

function AboutMe(props) {
    return (
        <div className='about-me-fulldiv' id={props.id} style={{zIndex:props.zIndex}}>
            <h1>About Me</h1>
        </div>
    )
}

export default AboutMe
