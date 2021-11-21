import React, { useEffect, useRef } from 'react'
import './intro.css';
import pic from '../../images/profile.png';
import TextAnim from '../../components/textAnim/textAnim';
import { v4 as uuidv4 } from 'uuid';
import ZoomAnim from '../../components/zoomAnim/zoomAnim';
function Intro(props) {
    const textCard_01 = useRef();
    const textCard_02 = useRef();
    const zoomDiv_01 = useRef();
    const zoomDiv_02 = useRef();
    const uuid = useRef([uuidv4(), uuidv4(), uuidv4(),uuidv4()]);
    useEffect(() => {
        if (props.activePageNumber === props.pageNumber) {

            textCard_01.current.anim('X', '+');
            textCard_02.current.anim('Y', '+', 300);
            zoomDiv_01.current.zoomIn();
            // zoomDiv_02.current.zoomIn('center',300);
        }
        else {
            zoomDiv_01.current.zoomOut();
            // zoomDiv_02.current.zoomOut('center',.8);
            textCard_01.current.revAnim('X', '+');
            textCard_02.current.revAnim('Y', '+');
        }
    }, [props.activePageNumber])
    return (
        <div className='intro-fulldiv' id={props.id} style={{ zIndex: props.zIndex }}>
                <ZoomAnim className='intro-zoom-div' id={uuid.current[2]} ref={zoomDiv_01}>
                    <div className='intro-layer'>
                        <div className='intro-namediv'>
                            <TextAnim contentClassName='intro-label' barColor={'#00bfff'} id={uuid.current[0]} axis={'X'} direction={'+'} ref={textCard_01} bar >
                                <h2>01</h2>
                                <h3>INTRO</h3>
                            </TextAnim>
                            <TextAnim id={uuid.current[1]} axis={'Y'} direction={'+'} ref={textCard_02}>
                                <div className='intro-namediv-intro'>
                                    <h1 style={{ marginRight: '10px', color: '#ff3c00' }}>HI!</h1>
                                    <h1>I am Arnab.</h1>
                                </div>
                            </TextAnim>
                            <span>I am a full stack web developer.</span>
                        </div>
                        <div className='intro-picdiv'>
                            <ZoomAnim id={uuid.current[3]} ref={zoomDiv_02} scale={0.8}>
                                <div className='intro-picdiv__inner-div'>
                                    <img className='intro-profile-pic' src={pic} />
                                </div>
                            </ZoomAnim>
                        </div>
                    </div>
                </ZoomAnim>
            </div>
    )
}

export default Intro
