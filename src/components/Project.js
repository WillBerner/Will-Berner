import React from 'react'

export default function Project({ project }) {

    // Style each project with their image
    const projectStyle = {
        height: "200px",
        width: "450px",
        backgroundImage: `url(${project.src})`,
        backgroundSize: "100%",
    };

    // Style project's icon links
    const iconStyle = {
        color: "#ffffff",
        fontSize: "1em"
    }

    // Style project's text to keep it visible - hide until scrolled over
    const text = {
        color: "white",
        display: "none"
    }

    // Keep links white, not blue
    const link = {
        color: "white",
    }

    // Show project title and links when hovering over
    const showText = (event) => {

        try {
            const projectDiv = event?.target;
            const projectInfo = projectDiv?.children[0];

            if (projectInfo && projectDiv) {
                projectDiv.style.boxShadow = "rgba(0, 0, 0, .6) 0 0 0 1000px inset";
                projectInfo.style.display = "";
                projectInfo.children[0].style.display = "";
            }
        } catch (error) {
            console.log(error);
        }

    }

    // Hide project title and links when not hovering over
    const hideText = (event) => {

        try {
            const projectDiv = event?.target;
            const projectInfo = projectDiv?.children[0];

            if (projectInfo && projectDiv) {
                projectDiv.style.boxShadow = "";
                projectInfo.style.display = "none";
                projectInfo.children[0].style.display = "none";
            }
        } catch (error) {
            console.log(error);
        }

    }

    // Render project card as an image and show infomation/links when image is hovered over
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center" style={projectStyle} onMouseEnter={showText} onMouseLeave={hideText} >
                <h3 className="text-center" style={text}>
                    <a className="text-decoration-none" style={link} href={project.deployedUrl} target="_blank" rel="noreferrer">
                        {project.title}
                    </a>
                    <a className="mx-4" href={project.githubRepo} target="_blank" rel="noreferrer">
                        <i className="bi-github" style={iconStyle}></i>
                    </a>

                </h3>
            </div>
        </div>
    )
}
