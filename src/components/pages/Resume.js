import React from 'react'

export default function Resume() {
    return (
        <div className="d-flex justify-content-center my-5">

            <div className="container">
                <div className="row mb-5 justify-content-center">

                    <div className="col-md-auto">
                        <button className="btn" data-bs-toggle="collapse" href="#collapseExample">View Resume</button>
                        <button className="btn"><a className="btn" href="./assets/images/Resume.pdf" download="Will Berner - Resume">Download</a></button>
                    </div>

                </div>

                <div className="d-flex justify-content-center mb-5">

                    <div id="collapseExample" className="collapse">
                        <embed src="./assets/images/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" width="500px" height="650px" />
                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-md-auto">
                        <h4>Proficiencies</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                One thing
                            </li>
                            <li className="list-group-item">
                                Another thing
                            </li>
                            <li className="list-group-item">
                                A third thing
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    )
}
