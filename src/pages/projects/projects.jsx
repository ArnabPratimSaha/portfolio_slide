import React, { useRef, useEffect, useState } from 'react'
import './projectAnimation.css';
import './projects.css';
import { v4 as uuidv4 } from 'uuid';
import ZoomAnim from '../../components/zoomAnim/zoomAnim';
import TextAnim from '../../components/textAnim/textAnim';
import Bulb from '../../components/bulb/bulb';
import ExpoAnim from '../../components/expoAnim/expoAnim';

import website_01 from './images/website.png'

function Projects(props) {
    const textCard_01 = useRef();
    const textCard_02 = useRef();
    const textCard_03 = useRef();
    const textCard_04 = useRef();
    const uuid = useRef([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]);
    const [card_01, setCard_01] = useState(false);
    const downtime = useRef(false);
    useEffect(() => {
        if (props.activePageNumber === props.pageNumber) {
            textCard_03.current.anim('Y', '+',textCard_02.current.anim('Y', '-',textCard_01.current.anim('X', '+',300)+200)+100);
            textCard_04.current.anim('X', '-',300);
            setTimeout(() => {
                setCard_01(true);
                document.getElementById('bulb_01').style.transform = `translateY(-10%) rotateZ(0)`;
                document.getElementById('bulb_02').style.transform = `translateY(0) rotateZ(0)`;
                document.getElementById('bulb_03').style.transform = `translateY(-20%) rotateZ(0)`;
                bulbAnimation();
                // document.getElementById('vivi-image').style.animation='image-anim-01 10s linear 2s infinite';
            }, 300);
        }
        else {
            textCard_01.current.revAnim('X', '+');
            textCard_02.current.revAnim('Y', '-');
            textCard_03.current.revAnim('Y', '+');
            textCard_04.current.revAnim('X', '-');
            document.getElementById('bulb_01').style.transform = `translateY(-100%) rotateZ(0)`;
            document.getElementById('bulb_02').style.transform = `translateY(-100%) rotateZ(0)`;
            document.getElementById('bulb_03').style.transform = `translateY(-100%) rotateZ(0)`;
            // document.getElementById('vivi-image').style.animation='none';
            setCard_01(false);
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
            <div className="bulb-div" >
                <div className="bulb bulb-one" id='bulb_01'><Bulb /><div className="light light-one"></div></div>
                <div className="bulb bulb-two" id='bulb_02'><Bulb /><div className="light light-two"></div></div>
                <div className="bulb bulb-three" id='bulb_03'><Bulb /><div className="light light-three"></div></div>
            </div>
            <div className="project-layer">
                <div className="project-layer-left-div">
                    <TextAnim contentClassName='project-page-label' id={uuid.current[0]} axis={'X'} direction={'-'} ref={textCard_04}>
                        <span>04</span>
                        <h3>PROJECT</h3>
                    </TextAnim>
                </div>
                <div className="project-layer-right-div">
                    <div className="right-grid-div">
                        <ExpoAnim axis='X' direction='-' className='grid-card grid-card-01' state={card_01} coverClassName='cover-01'>
                            {/* <img className="vivi-image" id='vivi-image' src={website_01}></img> */}
                            <div className="vivi-fulldiv">
                                <h1>VIVI</h1>
                                <p>a discord bot to handle messages.</p>
                            </div>
                        </ExpoAnim>
                        <div className='grid-card grid-card-02'>
                            <TextAnim className='projects-text-anim' contentClassName=" projects-text-anim-content chatter-fulldiv" id={uuid.current[1]} axis={'X'} direction={'+'} ref={textCard_01}>
                                <span>C</span>
                                <span>H</span>
                                <span>A</span>
                                <span>T</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                            </TextAnim>
                        </div>
                        <div className='grid-card grid-card-03'>
                            <TextAnim className='projects-text-anim' contentClassName=" projects-text-anim-content just-mail-it" id={uuid.current[2]} axis={'Y'} direction={'-'} ref={textCard_02}>
                                <span>JUST MAIL IT</span>
                            </TextAnim>
                        </div>
                        <div className='grid-card grid-card-04' >
                            <TextAnim className='projects-text-anim' contentClassName=" projects-text-anim-content detention" id={uuid.current[3]} axis={'Y'} direction={'+'} ref={textCard_03}>
                                <span>DETENTION</span>
                            </TextAnim>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
