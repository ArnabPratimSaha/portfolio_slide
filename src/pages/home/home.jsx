import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/navbar/navbar';
import Intro from '../../components/intro/intro'
import Sidebar from '../../components/sidebar/sidebar';
import Observer from '../../components/imtersectingObserver/observer';
import './home.css';
import AboutMe from '../../components/aboutMe/aboutMe';

function Home() {
    const [isLeftDrawerVisible, setIsLeftDrawerVisible] = useState(true);
    const [navbarFocus, setNavbarFocus] = useState(true);
    const prevScrollY = useRef(0);
    const prevPageNumber = useRef(0);
    const [pageNumber, setPageNumber] = useState(0);
    const dowtime = useRef(false);
    const firstTime = useRef(true)
    useEffect(() => {
        document.addEventListener('wheel', (e) => {
            if (!dowtime.current) {
                dowtime.current = true;
                if (e.deltaY < 0) {
                    setPageNumber((s) => s - 1);
                }
                else {
                    setPageNumber((s) => s + 1);
                }
                setTimeout(() => {
                    dowtime.current = false;
                }, 300);
            }
        })
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setNavbarFocus(false);
            }
            else {
                setNavbarFocus(true);
            }
        })
        return () => {
        }
    }, [])
    useEffect(() => {
        if (firstTime.current) {
            firstTime.current = false;
            return;
        }
        console.log(pageNumber);
    }, [pageNumber])
    return (
        <div className='home-fulldiv'>
            <Sidebar visible={isLeftDrawerVisible} />
            {/* <button onClick={()=>{setIsLeftDrawerVisible(!isLeftDrawerVisible)}}>Click</button> */}
            <Navbar focus={navbarFocus} />
            <Intro number={pageNumber} />
            <AboutMe />
            {/* <div style={{ height: '60rem', width: '100%', marginTop: '2rem' }}></div> */}
        </div>
    )
}

export default Home
