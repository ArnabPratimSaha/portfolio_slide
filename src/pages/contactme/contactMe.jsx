import React from 'react'
import TextAnim from '../../components/textAnim/textAnim';
import './contactMe.css';
function ContactMe(props) {
    return (
        <div className='contact-me-fulldiv' id={props.id} style={{zIndex:props.zIndex}}>
            <TextAnim>
                <h1>contact Me</h1>
            </TextAnim>
        </div>
    )
}

export default ContactMe
