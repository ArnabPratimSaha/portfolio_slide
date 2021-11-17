import React from 'react'
import './intro.css';
import pic from '../../images/profile.png';
function Intro(props) {
    return (
        <div className='intro-fulldiv'>
            <div className='intro-namediv'>
                <h1>HI! I am Arnab</h1>
                <span>I am a full stack web developer.</span>
            </div>
            <div className='intro-picdiv'>
                <div className='intro-picdiv__inner-div'>
                    <img className='intro-profile-pic' src={pic}/>
                </div>
            </div>
        </div>
    )
}

export default Intro
