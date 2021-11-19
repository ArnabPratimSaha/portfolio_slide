import React, { forwardRef, useImperativeHandle } from 'react'
import './zoomAnim.css';
const ZoomAnim = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            zoomIn,
            zoomOut
        }),
        [],
    )
    const zoomIn = (origin='center',delay=0) => {
        document.getElementById(props.id).style.transformOrigin=origin;
        setTimeout(() => {
            document.getElementById(props.id).style.transform = `scale(1)`;
        },delay)
    }
    const zoomOut = (origin='center',scale = .9) => {
        document.getElementById(props.id).style.transformOrigin=origin;
        document.getElementById(props.id).style.transform = `scale(${scale})`;
    }
    return (
        <div id={props.id} className={`zoom-anim-fulldiv ${props.className}`} style={{ transform: `scale(${props.scale?props.scale:.9})`,transformOrigin:props.origin?props.origin:'center' }}>
            {props.children}
        </div>
    )
})

export default ZoomAnim
