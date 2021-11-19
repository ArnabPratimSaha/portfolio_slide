import React, { useRef, useEffect, useState } from 'react'
import './observer.css';

function Observer(props) {
    const component = useRef()
    useEffect(() => {
        observer.observe(component.current)
    }, [])
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            console.log('working');
            if(props.onIntersect)props.onIntersect();
        }
    })
    return (
        <div ref={component}>
            {props.children}
        </div>
    )
}

export default Observer
