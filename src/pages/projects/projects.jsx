import React from 'react'
import './projects.css';
function Projects(props) {
    return (
        <div className='projects-fulldiv' id={props.id} style={{zIndex:props.zIndex}}>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects
