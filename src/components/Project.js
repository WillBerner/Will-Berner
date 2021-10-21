import React from 'react'

export default function Project({project}) {

    const projectStyle = {
        height: "200px",
        width: "350px",
        backgroundImage: `url(${project.src})`
    };

    const text = {
        color: "white"
    }

    const showText = (event) => {
        console.log(event.target.children[0]);
    }

    const hideText = (target) => {
        
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center" style={projectStyle} onMouseEnter={showText} onMouseLeave={hideText} >
                <h3 className="text-center" style={text}>{project.title}</h3>
            </div>
        </div>
    )
}
