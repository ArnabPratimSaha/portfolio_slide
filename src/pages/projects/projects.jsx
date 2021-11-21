import React, { useRef, useEffect, useState } from 'react'
import './projects.css';
import './projectAnimation.css';
import { v4 as uuidv4 } from 'uuid';
import ZoomAnim from '../../components/zoomAnim/zoomAnim';
import TextAnim from '../../components/textAnim/textAnim';
import Bulb from '../../components/bulb/bulb';

function Projects(props) {
    const textCard_01 = useRef();
    const textCard_02 = useRef();
    const textCard_03 = useRef();
    const textCard_04 = useRef();
    const zoomDiv_01 = useRef();
    const uuid = useRef([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]);
    const downtime = useRef(false);
    useEffect(() => {
        if (props.activePageNumber === props.pageNumber) {
            zoomDiv_01.current.zoomIn();
            // textCard_01.current.anim('Y', '-',300);
            // textCard_02.current.anim('Y', '-',400);
            // textCard_03.current.anim('Y', '-',500);
            // textCard_04.current.anim('X', '-',300);
        }
        else {
            zoomDiv_01.current.zoomOut('center', .7);
            // textCard_01.current.revAnim('Y', '-');
            // textCard_02.current.revAnim('Y', '-');
            // textCard_03.current.revAnim('Y', '-');
            // textCard_04.current.revAnim('X', '-');
        }
        if (props.activePageNumber === props.pageNumber) {
            setTimeout(() => {
                document.getElementById('bulb_01').style.transform = `translateY(-10%) rotateZ(0)`;
                document.getElementById('bulb_02').style.transform = `translateY(0) rotateZ(0)`;
                document.getElementById('bulb_03').style.transform = `translateY(-20%) rotateZ(0)`;
                bulbAnimation();
            }, 300);
        }
        else {
            document.getElementById('bulb_01').style.transform = `translateY(-100%) rotateZ(0)`;
            document.getElementById('bulb_02').style.transform = `translateY(-100%) rotateZ(0)`;
            document.getElementById('bulb_03').style.transform = `translateY(-100%) rotateZ(0)`;
        }
    }, [props.activePageNumber]);
    const bulbAnimation = () => {
        if (downtime.current) return;
        downtime.current = true;
        document.getElementById('bulb_01').style.animation = `bulb-anim-5 4s ease-in-out none 1`;
        document.getElementById('bulb_02').style.animation = `bulb-anim-3 2s ease-in-out 1.5s 1`;
        document.getElementById('bulb_03').style.animation = `bulb-anim-4 3s ease-in-out 1s 1`;
        setTimeout(() => {
            document.getElementById('bulb_01').style.animation = `none`;
            document.getElementById('bulb_02').style.animation = `none`;
            document.getElementById('bulb_03').style.animation = `none`;
            downtime.current = false;
        }, 5 * 1000);
    }
    return (
        <div className='projects-fulldiv' id={props.id} style={{ zIndex: props.zIndex }}>
            <ZoomAnim id={uuid.current[0]} className='project-zoomdiv' ref={zoomDiv_01}>
                <div className="bulb-div" >
                    <div className="bulb bulb-one" id='bulb_01'><Bulb /><div className="light light-one"></div></div>
                    <div className="bulb bulb-two" id='bulb_02'><Bulb /><div className="light light-two"></div></div>
                    <div className="bulb bulb-three" id='bulb_03'><Bulb /><div className="light light-three"></div></div>
                </div>
                <div className="project-layer">

                </div>
            </ZoomAnim>
        </div>
    )
}

export default Projects
