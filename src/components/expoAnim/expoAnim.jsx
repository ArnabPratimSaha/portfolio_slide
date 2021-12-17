import React,{forwardRef,useEffect,useImperativeHandle,useState} from 'react'
import './expoAnim.css';
const ExpoAnim = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({

        }),
        [],
    )
    return (
        <div className={`expoanim-fulldiv ${props.className}`} >
        <div className={`expoanim-cover ${props.coverClassName}`} style={{transform:`translate${props.axis}(${props.direction}${props.state?'100%':'0'})`}}></div>
            {props.children}
        </div>
    )
})

export default ExpoAnim
