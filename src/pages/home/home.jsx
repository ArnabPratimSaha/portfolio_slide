import React, { useState,useEffect} from 'react';
import Navbar from '../../components/navbar/navbar';
import Intro from '../../components/intro/intro'
import Sidebar from '../../components/sidebar/sidebar';
import Observer from '../../components/imtersectingObserver/observer';
import './home.css';
function Home() {
    const [isLeftDrawerVisible, setIsLeftDrawerVisible] = useState(true);
    const [navbarFocus, setNavbarFocus] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if (window.scrollY > window.innerHeight) {
                setNavbarFocus(false);
            }
            else {
                setNavbarFocus(true);
            }
        })
        return () => {
        }
    }, [])
    return (
        <div className='home-fulldiv'>
            <Sidebar visible={isLeftDrawerVisible} />
            {/* <button onClick={()=>{setIsLeftDrawerVisible(!isLeftDrawerVisible)}}>Click</button> */}
            <Navbar focus={navbarFocus} />
            <Intro />
            <div style={{ height: '60rem', width: '100%', marginTop: '2rem' }}></div>
        </div>
    )
}

export default Home
