import React from 'react'

import Project from '../Project.js'
import projectData from "../../Data/Projects.js";

export default function Portfolio() {

    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center">Portfolio</h2>



            <div className="row mb-4 justify-content-center">
                {projectData.Projects.map((project, i) => {
                    return (
                        <div className="col-6" key={i}>
                            <Project project={project} />
                        </div>
                    )
                })}
            </div>

            {/* <div className="row mb-4 justify-content-center">
                <div className="col-6">
                    <Project />
                </div>
                <div className="col-6">
                    <Project />
                </div>
            </div> */}

        </div>
    )
}
