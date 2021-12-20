import React, { useRef, useEffect, useState } from 'react'
import './hobby.css';
import { v4 as uuidv4 } from 'uuid';
import ZoomAnim from '../../../../components/zoomAnim/zoomAnim';
import TextAnim from '../../../../components/textAnim/textAnim';

import { BsController } from 'react-icons/bs';
import { MdMovie } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';

function Hobby(props) {
    const textCard_01 = useRef();
    const textCard_02 = useRef();
    const textCard_03 = useRef();
    const textCard_04 = useRef();
    const zoomDiv_01 = useRef();
    const uuid = useRef([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]);
    useEffect(() => {
        if (props.activePageNumber === props.pageNumber) {
            zoomDiv_01.current.zoomIn();
            textCard_01.current.anim('Y', '-', 300);
            textCard_02.current.anim('Y', '-', 400);
            textCard_03.current.anim('Y', '-', 500);
            textCard_04.current.anim('X', '-', 300);
        }
        else {
            zoomDiv_01.current.zoomOut('bottom', .7);
            textCard_01.current.revAnim('Y', '-');
            textCard_02.current.revAnim('Y', '-');
            textCard_03.current.revAnim('Y', '-');
            textCard_04.current.revAnim('X', '-');
        }
        if (props.activePageNumber === props.pageNumber) {
            setTimeout(() => {
                document.getElementById('hobby-flip').style.transform = `rotateZ(-${window.innerWidth > window.innerHeight ? 30 : 60}deg)`;
            }, 300);
        }
        else if (props.activePageNumber > props.pageNumber) {
            document.getElementById('hobby-flip').style.transform = `rotateZ(-90deg)`;
        }
        else {
            document.getElementById('hobby-flip').style.transform = `rotateZ(0deg)`;
        }
    }, [props.activePageNumber])
    return (
        <div className='hobby-fulldiv' id={props.id} style={{ zIndex: props.zIndex }}>
            <div className="hobby-flip" id={'hobby-flip'} ></div>
            <ZoomAnim id={uuid.current[0]} className='hobby-zoomdiv' ref={zoomDiv_01}>
                <div className='hobby-layer' >
                    <div className="hobby-top-div">
                        <TextAnim className='hobby-div-anim' contentClassName="hobby-movies" id={uuid.current[1]} axis={'Y'} direction={'-'} ref={textCard_01}>
                            <MdMovie className='hobby-icons' />
                            <h1>MOVIES</h1>
                            <p>I enjoy watching both movies and web-series.</p>
                        </TextAnim>
                        <TextAnim className='hobby-div-anim' contentClassName="hobby-gaming" id={uuid.current[2]} axis={'Y'} direction={'-'} ref={textCard_02}>
                            <BsController className='hobby-icons' />
                            <h1>GAMES</h1>
                            <p>Other than movies and webseries i like to play both multiplayer and story-driven games.whenever i get free time.</p>
                        </TextAnim>
                        <TextAnim className='hobby-div-anim' contentClassName="hobby-helping-projects" id={uuid.current[3]} axis={'Y'} direction={'-'} ref={textCard_03}>
                            <AiFillProject className='hobby-icons' />
                            <h1>HELPING OTHER PROJECTS</h1>
                            <p>I like to help my friends and others in their project using html,css,javascript,react,node,react-native.</p>
                        </TextAnim>
                    </div>
                    <div className="hobby-bottom-div">
                        <TextAnim contentClassName='hobby-page-label' id={uuid.current[4]} axis={'X'} direction={'-'} ref={textCard_04}>
                            <span>03</span>
                            <h3>HOBBY</h3>
                        </TextAnim>
                    </div>
                </div>
            </ZoomAnim>
        </div>
    )
}

export default Hobby
