import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import './textAnim.css';
const TextAnim = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            anim,
            revAnim
        }),
        [],
    )
    const anim = (axis='X', direction='+',delay=0 ) => {
        setTimeout(() => {
            document.getElementById(props.id).style.transform = `translate${axis}(0%)`;
            if(props.bar)
                document.getElementById(`span_${props.id}`).style.animation = `span-anim 800ms linear none 1`;
        }, delay);
        return delay;
    }
    const revAnim = (axis='X', direction='+') => {
        document.getElementById(props.id).style.transform = `translate${axis}(${direction === '+' ? '-' : '+'}100%)`;
        if(props.bar)
            document.getElementById(`span_${props.id}`).style.animation=`none`;
    }
    return (
        <div className={`textanim-fulldiv ${props.className}`}>
            <div className={`textanim-content-div ${props.contentClassName}`} id={props.id} style={{ transform: `translate${props.axis}(${props.direction === '+' ? '-' : '+'}100%)` }}>
                {props.children}
            </div>
            {props.bar&&<div className='textanim-span' id={`span_${props.id}`} style={{ background: props.barColor ? props.barColor : '#00bfff' }}></div>}
        </div>
    )
})

export default TextAnim
