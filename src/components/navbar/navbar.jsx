import React, { useEffect, useState,forwardRef,useImperativeHandle } from 'react'
import './navbar.css';
const MODES={
    LIGHT:'light',
    DARK:'dark'
}

const  Navbar=forwardRef((props,ref)=>{
    const [animationSets, setAnimationSets] = useState([null, ...new Array(props.options.length).fill(false)])
    const [index, setIndex] = useState(1);//number indicates the components such as intro is 0
    const [mode, setMode] = useState(MODES.DARK);
    const [translate, setTranslate] = useState(0);
    const [width, setWidth] = useState(1);
    useImperativeHandle(
        ref,
        () => ({
            setMode
        }),
        [],
    )
    useEffect(() => {
        for (let i = 1; i <= animationSets.length - 1; i++) {
            setTimeout(() => {
                setAnimationSets((s) => {
                    var newState = [...s];
                    newState[i] = true;
                    return newState;
                })
            }, 200 * i);
        }
    }, []);
    useEffect(() => {
        if (props.index) setIndex(props.index)
    }, [props.index])
    useEffect(() => {
        const div=document.getElementById(`link_0${index}`);
        const bar=document.getElementById(`bar_01`);
        if(!div||!bar)return;
        setTranslate(s=>s+(div.getBoundingClientRect().x - bar.getBoundingClientRect().x))
        setWidth(div.getBoundingClientRect().width);
    }, [index]);
    return (
        <div className='navbar-fulldiv'>
            <div className='navbar-leftdiv'>
                <a >A</a>
            </div>
            <div className='navbar-rightdiv' id='div_01'>
                <div className='navbar-rightdiv__links'>
                    {props.options.map((o, i) => <a key={i} id={`link_0${i + 1}`} style={{ transform: animationSets[i + 1] ? 'translateY(0)' : 'translateY(-5rem)', color: index === i + 1 ? '#ff3c00' : mode===MODES.DARK ? '#222' : '#fff' }}>{o.toUpperCase()}</a>)}
                </div>
                <span id='bar_01' className='navbar-rightdiv__bar' style={{transform:`translateX(${translate}px)`,width:`${width}px`}}></span>
            </div>
        </div>
    )
});
export default Navbar;