import React, { useRef, useEffect, useState } from 'react'
import './observer.css';

function Observer(props) {
    const component = useRef()
    const isDone = useRef(false);
    useEffect(() => {
        observer.observe(component.current)
    }, [])
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && (!isDone.current || props.repeat)) {
            isDone.current = true;
            if(props.onIntersect)props.onIntersect();
        }
    },{rootMargin:`${props.rootMargin?props.rootMargin:'0'}px`})
    return (
        <div ref={component}>
            {props.children}
        </div>
    )
}

export default Observer
