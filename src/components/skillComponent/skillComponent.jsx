import React,{forwardRef,useImperativeHandle,useEffect,useState,useRef} from 'react'
import './skillComponent.css';
const SkillComponent=forwardRef((props,ref)=> {
    const number = useRef(0)
    useImperativeHandle(
        ref,
        () => ({
            setPercentage
        }),
        [],
    )
    const setPercentage=(percentage='-100',delay=0)=>{
        setTimeout(() => {
            document.getElementById(`bar_${props.id}`).style.transform = `translateX(${percentage}%)`;
        }, delay);
    }
    return (
        <div className={`skill-fulldiv ${props.className && props.className}`}>
            <div className="skill-icondiv">
                {props.icon}
            </div>
            <div className="skill-component-rightdiv">
                <div className="skill-component-textdiv">
                    <div className='skill-component-textdiv__left'>
                        <h1 className='skill-component__text'>{props.text}</h1>
                        <p className='skill-component__experience'>{props.experience}</p>
                    </div>
                    <div className="skill-component-textdiv__right">
                        <h2 className='skill-component__percentage'>{props.percentage}%</h2>
                    </div>
                </div>
                <div className="skill-component-progressdiv">
                    <div className="progress-bar">
                        <div className="progress-bar-bar" id={`bar_${props.id}`} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default SkillComponent
