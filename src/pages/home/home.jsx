import React,{useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Intro from '../../components/intro/intro'
import Sidebar from '../../components/sidebar/sidebar'
import './home.css';
function Home() {
    const [isLeftDrawerVisible, setIsLeftDrawerVisible] = useState(true)
    return (
        <div className='home-fulldiv'>
            <Sidebar visible={isLeftDrawerVisible}/>
            {/* <button onClick={()=>{setIsLeftDrawerVisible(!isLeftDrawerVisible)}}>Click</button> */}
            <Navbar />
            <Intro />
        </div>
    )
}

export default Home
