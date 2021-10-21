import React from 'react'

import Project from '../Project.js'

export default function Portfolio() {
    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center">Portfolio</h2>

            <div className="row mb-4 justify-content-center">
                <div className="col-4">
                    <Project />
                </div>
                <div className="col-4">
                    <Project />
                </div>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-4">
                    <Project />
                </div>
                <div className="col-4">
                    <Project />
                </div>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-4">
                    <Project />
                </div>
                <div className="col-4">
                    <Project />
                </div>
            </div>

        </div>
    )
}
