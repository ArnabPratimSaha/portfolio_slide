import React from 'react'
import './intro.css';
import pic from '../../images/profile.png';
function Intro(props) {
    return (
        <div className='intro-fulldiv'>
            <div className='intro-namediv'>
                <div className='intro-namediv-intro'>
                    <h1 style={{marginRight:'10px',color:'#ff3c00'}}>HI!</h1>
                    <h1>{`I am Arnab.${props.number}`}</h1>
                </div>
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
