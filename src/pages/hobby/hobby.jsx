import React from 'react'
import './hobby.css';
function Hobby(props) {
    return (
        <div className='hobby-fulldiv' id={props.id} style={{zIndex:props.zIndex}}>
            <h1>hobby</h1>
        </div>
    )
}

export default Hobby
