import React from 'react'

// Import project components and project data
import Project from '../Project.js'
import projectData from "../../Data/Projects.js";

export default function Portfolio() {

    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center">Project Portfolio</h2>

            {/* Two projects per row maximum, so nested-map project pairs into rows */}
            {projectData.Projects.map((pair, i) => {
                return (
                    // For every pair, create a new row
                    <div className="row mb-4 justify-content-center" key={i}>
                        {pair.map(project => {
                            return (
                                // For each project, create a new column
                                <div className="col-md-6 col-sm-12 mb-3" key={project.title}>
                                    <Project project={project} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}

            <p className="text-center">
                More projects to be added soon.
            </p>

        </div>
    )
}
