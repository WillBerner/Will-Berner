import React from 'react'

import Project from '../Project.js'
import projectData from "../../Data/Projects.js";

export default function Portfolio() {

    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center">Portfolio</h2>

            <div className="row mb-4 justify-content-center">
                {projectData.Projects.map((project, i) => {

                    if (i < 2) {

                        return (
                            <div className="col-6" key={i}>
                                <Project project={project} />
                            </div>
                        )

                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="row mb-5 justify-content-center">
                {projectData.Projects.map((project, i) => {

                    if (i >= 2 && i < 4) {

                        return (
                            <div className="col-6" key={i}>
                                <Project project={project} />
                            </div>
                        )

                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="row mb-5 justify-content-center">
                {projectData.Projects.map((project, i) => {

                    if (i >= 4 && i < 6) {

                        return (
                            <div className="col-6" key={i}>
                                <Project project={project} />
                            </div>
                        )

                    } else {
                        return null;
                    }
                })}
            </div>



        </div>
    )
}
