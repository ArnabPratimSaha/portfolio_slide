import React, { useRef, useEffect, useState } from 'react'
import './contactMe.css';
import { v4 as uuidv4 } from 'uuid';
import ZoomAnim from '../../../../components/zoomAnim/zoomAnim';
import TextAnim from '../../../../components/textAnim/textAnim';
import SkillComponent from '../../../../components/skillComponent/skillComponent';
import { AiFillHtml5, AiFillLinkedin, AiFillGithub, AiFillTwitterSquare  } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiCplusplus, SiMongodb, SiAdobeillustrator } from 'react-icons/si';
import { DiReact, DiNodejsSmall } from 'react-icons/di';

function ContactMe(props) {
    const textCard_01 = useRef();
    const textCard_02 = useRef();
    const textCard_03 = useRef();
    const textCard_04 = useRef();
    const textCard_05 = useRef();
    const textCard_06 = useRef();
    const textCard_07 = useRef();
    const textCard_08 = useRef();
    const textCard_09 = useRef();
    const textCard_10 = useRef();
    const SKILL_01 = useRef();
    const SKILL_02 = useRef();
    const SKILL_03 = useRef();
    const SKILL_04 = useRef();
    const SKILL_05 = useRef();
    const SKILL_06 = useRef();
    const SKILL_07 = useRef();
    const SKILL_08 = useRef();

    const uuid = useRef([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(),uuidv4()]);
    useEffect(() => {
        if (props.activePageNumber === props.pageNumber) {
            setTimeout(() => {
                SKILL_01.current.setPercentage(90, 600);
                SKILL_02.current.setPercentage(80, 600);
                SKILL_03.current.setPercentage(80, 600);
                SKILL_04.current.setPercentage(50, 600);
                SKILL_05.current.setPercentage(70, 600);
                SKILL_06.current.setPercentage(70, 600);
                SKILL_07.current.setPercentage(60, 600);
                SKILL_08.current.setPercentage(60, 600);
            }, 300);
        }
        else {
            SKILL_01.current.setPercentage(0);
            SKILL_02.current.setPercentage(0);
            SKILL_03.current.setPercentage(0);
            SKILL_04.current.setPercentage(0);
            SKILL_05.current.setPercentage(0);
            SKILL_06.current.setPercentage(0);
            SKILL_07.current.setPercentage(0);
            SKILL_08.current.setPercentage(0);
        }
        if (props.activePageNumber === props.pageNumber) {
            textCard_01.current.anim('Y', '-', 300);

            if(textCard_10.current)textCard_10.current.anim('Y', '-', 300);

            textCard_02.current.anim('X', '+', 400);
            textCard_03.current.anim('X', '+', 500);
            textCard_04.current.anim('X', '+', 600);
            textCard_05.current.anim('X', '+', 700);

            textCard_06.current.anim('X', '-', 400);
            textCard_07.current.anim('X', '-', 500);
            textCard_08.current.anim('X', '-', 600);
            textCard_09.current.anim('X', '-', 700);
        }
        else {
            textCard_01.current.revAnim('Y', '-');
            if(textCard_10.current)textCard_10.current.revAnim('Y', '-');

            textCard_02.current.revAnim('X', '+');
            textCard_03.current.revAnim('X', '+');
            textCard_04.current.revAnim('X', '+');
            textCard_05.current.revAnim('X', '+');

            textCard_06.current.revAnim('X', '-');
            textCard_07.current.revAnim('X', '-');
            textCard_08.current.revAnim('X', '-');
            textCard_09.current.revAnim('X', '-');

        }
    }, [props.activePageNumber]);
    return (
        <div className='contact-me-fulldiv' id={props.id} style={{ zIndex: props.zIndex }}>
            <div className='contact-me-layer' >
                <div className='contact-me-top-div'>
                    <div className="top-skills">
                        <div className="skills-left">
                            <TextAnim id={uuid.current[1]} axis={'X'} direction={'+'} ref={textCard_02}><SkillComponent text='HTML' icon={<AiFillHtml5 />} ref={SKILL_01} id={'HTML'} percentage={90} experience='1 year' /></TextAnim>
                            <TextAnim id={uuid.current[2]} axis={'X'} direction={'+'} ref={textCard_03}><SkillComponent text='CSS' icon={<IoLogoCss3 />} ref={SKILL_02} id={'CSS'} percentage={80} experience='1 year' /></TextAnim>
                            <TextAnim id={uuid.current[3]} axis={'X'} direction={'+'} ref={textCard_04}><SkillComponent text='C/C++' icon={<SiCplusplus />} ref={SKILL_03} id={'C'} percentage={80} experience='3 years' /></TextAnim>
                            <TextAnim id={uuid.current[4]} axis={'X'} direction={'+'} ref={textCard_05}><SkillComponent text='ADOBE ILLUSTRATOR' icon={<SiAdobeillustrator />} ref={SKILL_04} id={'ADOBE'} percentage={50} experience='4 months' /></TextAnim>
                        </div>
                        <div className="skills-right">
                            <TextAnim id={uuid.current[5]} axis={'X'} direction={'-'} ref={textCard_06}><SkillComponent text='JAVA SCRIPT' icon={<IoLogoJavascript />} ref={SKILL_05} id={'JAVASCRIPT'} percentage={70} experience='1 year' /></TextAnim>
                            <TextAnim id={uuid.current[6]} axis={'X'} direction={'-'} ref={textCard_07}><SkillComponent text='REACT' icon={<DiReact />} ref={SKILL_06} id={'REACT'} percentage={70} experience='1 year' /></TextAnim>
                            <TextAnim id={uuid.current[7]} axis={'X'} direction={'-'} ref={textCard_08}><SkillComponent text='NODE' icon={<DiNodejsSmall />} ref={SKILL_07} id={'NODE'} percentage={60} experience='1 year' /></TextAnim>
                            <TextAnim id={uuid.current[8]} axis={'X'} direction={'-'} ref={textCard_09}><SkillComponent text='MONGOOSE' icon={<SiMongodb />} ref={SKILL_08} id={'MONGOOSE'} percentage={60} experience='1 year' /></TextAnim>
                        </div>
                    </div>
            {window.innerWidth>1200&&<div className="contact-me-page-label-wrapper">
                <TextAnim contentClassName='contact-me-page-label' id={uuid.current[9]} axis={'Y'} direction={'-'} ref={textCard_10}>
                    <span>05</span>
                    <h3>CONTACT ME</h3>
                </TextAnim>
            </div>}
                </div>
                <TextAnim className='contact-me-bottom-div' contentClassName='contact-me-inner-div' id={uuid.current[0]} axis={'Y'} direction={'-'} ref={textCard_01}>
                    <div className="bottom-div_gmail">
                        <a href='#'>arnabpratimsaha@gmail.com</a>
                    </div>
                    <div className="bottom-div_links">
                        <a className="bottom-div_links__links"><AiFillLinkedin /></a>
                        <a className="bottom-div_links__links"><AiFillGithub /></a>
                        <a className="bottom-div_links__links"><AiFillTwitterSquare /></a>
                    </div>
                </TextAnim>
            </div>
        </div>
    )
}

export default ContactMe
