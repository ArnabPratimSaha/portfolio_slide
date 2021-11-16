import React from 'react'
import './HoverButton.css';
function HoverButton(props) {
    return (
        <div>
            <span onMouseOver={()=>{}} onMouseLeave={()=>{}}>
                {props.name}
            </span>
        </div>
    )
}

export default HoverButton
