import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/navbar/navbar';
import Intro from '../intro/intro'
import Sidebar from '../../components/sidebar/sidebar';
import Observer from '../../components/imtersectingObserver/observer';
import './home.css';
import AboutMe from '../aboutMe/aboutMe';
import Hobby from '../hobby/hobby';
import Projects from '../projects/projects';
import ContactMe from '../contactme/contactMe';
import swipeDetect from 'swipe-detect';
const maxPage = 5;
function Home() {
    const [isRightBarVisible, setIsRightDrawerVisible] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const prevPageNumber = useRef(1);
    const dowtime = useRef(false);
    const firstTime = useRef(true);
    const slideInfo = useRef(new Array());
    
    useEffect(() => {
        swipeDetect(window, (swipe) => {
            if (!dowtime.current) {
                dowtime.current = true;
                if (swipe === 'left' || swipe === 'up') {
                    setPageNumber((s) => { prevPageNumber.current = s; return s < maxPage ? s + 1 : s });
                }
                else {
                    setPageNumber((s) => { prevPageNumber.current = s; return s > 1 ? s - 1 : s });
                }
                setTimeout(() => {
                    dowtime.current = false;
                }, 400);
            }
        }, 20);
        document.addEventListener('wheel', (e) => {
            if (!dowtime.current) {
                dowtime.current = true;
                if (e.deltaY < 0) {
                    setPageNumber((s) => {prevPageNumber.current=s;return s > 1 ? s - 1 : s});
                }
                else {
                    setPageNumber((s) => {prevPageNumber.current=s;return s < maxPage ? s + 1 : s});
                }
                setTimeout(() => {
                    dowtime.current = false;
                }, 400);
            }
        })
    }, [])
    useEffect(() => {
        slideInfo.current=[];
        slideInfo.current.push(null);
        for (let i = 1; i <= maxPage; i++) {
            slideInfo.current.push(document.getElementById(`slide_${i<10?`0${i}`:i}`).getBoundingClientRect());
        }
    }, [])
    useEffect(() => {
        if (firstTime.current) {
            firstTime.current = false;
            return;
        }
        if(pageNumber===1|| pageNumber===5)setIsRightDrawerVisible(true);
        else setIsRightDrawerVisible(false);
        if(pageNumber>prevPageNumber.current)
        {
            document.getElementById(`slide_${pageNumber<10?`0${pageNumber}`:pageNumber}`).style.transform=`translate(0,0)`;
        }
        else
        {
            if(prevPageNumber.current===1 || prevPageNumber.current===5)
            {
                document.getElementById(`slide_0${prevPageNumber.current}`).style.transform=`translate(0,-100%)`;
            }
            else if(prevPageNumber.current===2)
            {
                document.getElementById(`slide_02`).style.transform=`translate(100%,0)`;
            }
            else if(prevPageNumber.current===3)
            {
                document.getElementById(`slide_03`).style.transform=`translate(0,100%)`;
            }
            else if(prevPageNumber.current===4)
            {
                document.getElementById(`slide_04`).style.transform=`translate(-100%,0)`;
            }
        }
    }, [pageNumber]);
    return (
        <div className='home-fulldiv'>
            <Sidebar visible={isRightBarVisible} />
            <Navbar index={pageNumber} options={['Intro','About Me','Hobby','Projects','Contact Me']}/>
            <Intro number={pageNumber} id={'slide_01'} activePageNumber={pageNumber} pageNumber={1} zIndex={10}/>
            <AboutMe id={'slide_02'} activePageNumber={pageNumber} pageNumber={2} zIndex={20}/>
            <Hobby id={'slide_03'} activePageNumber={pageNumber} pageNumber={3} zIndex={30}/>
            <Projects id={'slide_04'} activePageNumber={pageNumber} pageNumber={4} zIndex={40}/>
            <ContactMe id={'slide_05'} activePageNumber={pageNumber} pageNumber={5} zIndex={50}/>
        </div>
    )
}

export default Home
