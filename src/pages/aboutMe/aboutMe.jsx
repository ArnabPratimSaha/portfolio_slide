import React,{useRef,useEffect,useState} from 'react'
import './aboutMe.css';
import { v4 as uuidv4 } from 'uuid';
import ZoomAnim from '../../components/zoomAnim/zoomAnim';
import TextAnim from '../../components/textAnim/textAnim';
function AboutMe(props) {
    const textCard_01 = useRef();
    const textCard_02 = useRef();
    const textCard_03 = useRef();
    const zoomDiv_01 = useRef();
    const zoomDiv_02 = useRef();
    const uuid = useRef([uuidv4(), uuidv4(), uuidv4(),uuidv4()]);
    useEffect(() => {
        if (props.activePageNumber === props.pageNumber) {
            textCard_01.current.anim('Y', '-',300);
            textCard_02.current.anim('X', '+',400);
            textCard_03.current.anim('Y', '+',300);
            zoomDiv_01.current.zoomIn();
        }
        else {
            zoomDiv_01.current.zoomOut('bottom',.7);
            textCard_01.current.revAnim('Y', '-');
            textCard_02.current.revAnim('X', '+');
            textCard_03.current.revAnim('Y', '+');
        }
        if (props.activePageNumber === props.pageNumber) {
            setTimeout(() => {
                document.getElementById('about-circle_01').style.transform = `translateY(-50%) scale(1)`;
            }, 300);
        }
        else if (props.activePageNumber > props.pageNumber) {
            document.getElementById('about-circle_01').style.transform = `translateY(-50%) scale(0)`;
        }
        else {
            document.getElementById('about-circle_01').style.transform = `translateY(-50%) scale(${window.innerWidth > 900 ? 2 : 5})`;
        }
    }, [props.activePageNumber])
    return (
        <div className='about-me-fulldiv' id={props.id} style={{zIndex:props.zIndex}}>
            <div className='about-circle_01' id={`about-circle_01`} style={{ zIndex:-1, }}></div>
            <ZoomAnim className='about-me-zoom-div' id={uuid.current[0]} ref={zoomDiv_01}>
                <div className='about-me-layer'>
                    <div className="about-me-top-div">
                        <div className="about-me-info-div">
                            <TextAnim id={uuid.current[2]} axis={'X'} direction={'+'} ref={textCard_02}>
                                <h1>I am Arnab Pratim Saha</h1>
                            </TextAnim>
                            <TextAnim id={uuid.current[3]} axis={'Y'} direction={'+'} ref={textCard_03}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eaque maxime quaerat, ut assumenda cum quae? Deserunt nemo eius dignissimos obcaecati quas hic quasi adipisci, sequi quo quibusdam alias mollitia.</p>
                            </TextAnim>
                        </div>
                    </div>
                    <div className="about-me-bottom-div">
                        <TextAnim contentClassName='about-me-label' id={uuid.current[1]} axis={'Y'} direction={'-'} ref={textCard_01}>
                            <h2>02</h2>
                            <h3>ABOUT ME</h3>
                        </TextAnim>
                    </div>
                </div>
            </ZoomAnim>
        </div>
    )
}

export default AboutMe
