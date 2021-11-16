import React, { useEffect, useState } from 'react'
import './navbar.css';
function Navbar() {
    const [isFirstAnimationDone,setIsFirstAnimationDone]=useState(false);
    const [isSecAnimationDone,setIsSecAnimationDone]=useState(false);
    const [isThirdAnimationDone,setIsThirdAnimationDone]=useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setIsFirstAnimationDone(true);
            setTimeout(() => {
                setIsSecAnimationDone(true);
                setTimeout(() => {
                    setIsThirdAnimationDone(true)
                }, 800);
            }, 800);
        }, 200);
    },[])
    return (
        <div className='navbar-fulldiv'>
            <div className='navbar-leftdiv'>
                <a href='/home'>HOME</a>
            </div>
            <div className='navbar-rightdiv'>
                <div  style={{top:isFirstAnimationDone?'50%':'-5rem'}}>
                    <a>INTRO</a>
                </div >
                <div style={{top:isSecAnimationDone?'50%':'-5rem'}}>
                    <a>ABOUT ME</a>
                </div>
                <div style={{top:isThirdAnimationDone?'50%':'-5rem'}}>
                    <a>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
