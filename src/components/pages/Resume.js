import React from 'react'

export default function Resume() {

    let proficiencies = {
        frontend: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Design", "React", "Vue", "Bootstrap"],
        backend: ["APIs", "Node", "Express", "Routing", "MySQL, Sequelize", "MongoDB, Mongoose", "REST", "GraphQL"]
    };


    return (
        <div className="d-flex justify-content-center my-5">

            <div className="container">
                <div className="row mb-5 justify-content-center">

                    <h3 className="text-center mb-3">Resume</h3>

                    <div className="col-3 text-center mt-2">
                        <button className="btn" data-bs-toggle="collapse" href="#collapseExample">View Resume</button>

                    </div>
                    <div className="col-3 text-center">
                        <button className="btn"><a className="btn" href="./assets/images/Resume.pdf" download="Will Berner - Resume">Download</a></button>
                    </div>

                </div>

                <div className="d-flex justify-content-center mb-5">

                    <div id="collapseExample" className="collapse">
                        <embed src="./assets/images/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" width="500px" height="650px" />
                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        <h4 className="mb-5 text-center">Proficiencies</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col mx-4">
                        <h5 className="text-center">Front End</h5>
                        <ul className="list-group">
                            {proficiencies.frontend.map((proficiency, i) => {
                                return (
                                    <li className="list-group-item" key={i}>
                                        {proficiency}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col mx-4">
                        <h5 className="text-center">Back End</h5>
                        <ul className="list-group">
                            {proficiencies.backend.map((proficiency, i) => {
                                return (
                                    <li className="list-group-item" key={i}>
                                        {proficiency}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>


            </div>


        </div>
    )
}
