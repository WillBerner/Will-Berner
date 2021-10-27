import React from 'react'

export default function Header({ setPage, currentPage }) {

    // Set a new page based on user input
    const setAbout = () => { setPage("About") }
    const setPortfolio = () => { setPage("Portfolio") }
    const setContact = () => { setPage("Contact") }
    const setResume = () => { setPage("Resume") }
    const setTeaching = () => { setPage("Teaching") }
    const setResearch = () => { setPage("Research")}

    // Render header - style page names based on what current page is
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-brand btn mt-1 fw-bold" onClick={setAbout} >Will Berner</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Render navbar links to different pages */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className={currentPage === "About" ? "btn mt-1 fw-bold" : "btn mt-1"} onClick={setAbout} id="about">About Me</button>
                        </li>
                        <li className="nav-item">
                            <button className={currentPage === "Portfolio" ? "btn mt-1 fw-bold" : "btn mt-1"} onClick={setPortfolio} id="portfolio">Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button className={currentPage === "Teaching" ? "btn mt-1 fw-bold" : "btn mt-1"} onClick={setTeaching} id="teaching">Teaching</button>
                        </li>
                        <li className="nav-item">
                            <button className={currentPage === "Research" ? "btn mt-1 fw-bold" : "btn mt-1"} onClick={setResearch} id="research">Research</button>
                        </li>
                        <li className="nav-item">
                            <button className={currentPage === "Contact" ? "btn mt-1 fw-bold" : "btn mt-1"} onClick={setContact} id="contact">Contact</button>
                        </li>
                        <li className="nav-item">
                            <button className={currentPage === "Resume" ? "btn mt-1 fw-bold" : "btn mt-1"} onClick={setResume} id="resume">Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
