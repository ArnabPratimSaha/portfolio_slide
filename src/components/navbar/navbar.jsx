import React, { useEffect, useState, useRef } from 'react'
import './navbar.css';
function Navbar(props) {
    const [isFirstAnimationDone, setIsFirstAnimationDone] = useState(false);
    const [isSecAnimationDone, setIsSecAnimationDone] = useState(false);
    const [isThirdAnimationDone, setIsThirdAnimationDone] = useState(false);
    const [index, setIndex] = useState(1);//number indicates the components such as intro is 0
    const divSize = useRef(new Array());
    useEffect(() => {
        setTimeout(() => {
            setIsFirstAnimationDone(true);
            setTimeout(() => {
                setIsSecAnimationDone(true);
                setTimeout(() => {
                    setIsThirdAnimationDone(true)
                }, 800);
            }, 800);
        }, 200);
    }, []);
    useEffect(() => {
        if (props.index) setIndex(props.index)
    }, [props.index])
    useEffect(() => {
        divSize.current = [];
        divSize.current.push(document.getElementById('bar_01').getBoundingClientRect());
        divSize.current.push(document.getElementById('link_01').getBoundingClientRect());
        divSize.current.push(document.getElementById('link_02').getBoundingClientRect());
        divSize.current.push(document.getElementById('link_03').getBoundingClientRect());
    }, []);
    useEffect(() => {
        if (divSize.current.length === 0) return;
        document.getElementById(`bar_01`).style.transform = `translateX(${divSize.current[index].left - divSize.current[0].left}px) scaleX(${divSize.current[index].width / divSize.current[0].width})`;
    }, [index]);
    return (
        <div className='navbar-fulldiv' style={{ background: props.focus ? 'transparent' : '#222831', height: props.focus ? '4rem' : '3rem' }}>
            <div className='navbar-leftdiv'>
                <a >A</a>
            </div>
            <div className='navbar-rightdiv' id='div_01'>
                <div className='navbar-rightdiv__links'>
                    <a id='link_01' onClick={()=>{setIndex(1)}} style={{ transform: isFirstAnimationDone ? 'translateY(0)' : 'translateY(-5rem)', color: index===1 ? '#ff3c00' :props.focus?'#222':'#fff' }}>INTRO</a>
                    <a id='link_02' onClick={()=>{setIndex(2)}} style={{ transform: isSecAnimationDone ? 'translateY(0)' : 'translateY(-5rem)', color: index===2 ? '#ff3c00' :props.focus?'#222': '#fff' }}>ABOUT ME</a>
                    <a id='link_03' onClick={()=>{setIndex(3)}} style={{ transform: isThirdAnimationDone ? 'translateY(0)' : 'translateY(-5rem)', color: index===3 ? '#ff3c00' :props.focus?'#222': '#fff' }}>CONTACT</a>
                </div>
                <span id='bar_01' className='navbar-rightdiv__bar'></span>
            </div>
        </div>
    )
}

export default Navbar;