import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai';
function Sidebar(props) {
    const [isFirstAnimationDone, setIsFirstAnimationDone] = useState(false);
    const [isSecAnimationDone, setIsSecAnimationDone] = useState(false);
    const [isThirdAnimationDone, setIsThirdAnimationDone] = useState(false);
    const [isLeftDrawerVisible, setIsLeftDrawerVisible] = useState(props.visible)
    const [downtime, setDowntime] = useState(false);
    useEffect(() => {
        if(!downtime) {
            setDowntime(true);
            setIsLeftDrawerVisible(props.visible)
            setTimeout(() => {
                setDowntime(false)
            }, 200);
        }
    }, [props.visible]);
    useEffect(() => {
        if (isLeftDrawerVisible) {
            setTimeout(() => {
                setIsFirstAnimationDone(true);
                setTimeout(() => {
                    setIsSecAnimationDone(true);
                    setTimeout(() => {
                        setIsThirdAnimationDone(true);
                    }, 200);
                }, 200);
            }, 200);
        }
        else {
            setTimeout(() => {
                setIsThirdAnimationDone(false);
                setTimeout(() => {
                    setIsSecAnimationDone(false);
                    setTimeout(() => {
                        setIsFirstAnimationDone(false)
                    }, 200);
                }, 200);
            }, 200);

        }
    }, [isLeftDrawerVisible])
    return (
        <div className='sidebar-overlay'>
            <div className='icondiv'>
                <div className='icondiv-icon__div' style={{ left: isFirstAnimationDone ? 0 : '10rem' }}>
                    <AiFillLinkedin className='icondiv-icon' onClick={()=>window.location='https://www.linkedin.com/in/arnab-pratim-saha-515942218/'} />
                </div>
                <div className='icondiv-icon__div' style={{ left: isSecAnimationDone ? 0 : '10rem' }}>
                    <AiFillGithub className='icondiv-icon' onClick={()=>window.location='https://github.com/ArnabPratimSaha'} />
                </div>
                <div className='icondiv-icon__div' style={{ left: isThirdAnimationDone ? 0 : '10rem' }}>
                    <AiFillTwitterSquare className='icondiv-icon' onClick={()=>window.location='https://twitter.com/ArnabPratimSaha'} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
