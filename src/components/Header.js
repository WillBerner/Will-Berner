import React from 'react'

export default function Header({ setPage, currentPage }) {

    let setAbout = () => { setPage("About") }
    let setPortfolio = () => { setPage("Portfolio") }
    let setContact = () => { setPage("Contact") }
    let setResume = () => { setPage("Resume") }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
            <button className="navbar-brand btn mt-1 fw-bold" onClick={setAbout} >Will Berner</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn mt-1" onClick={setAbout} >About Me</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn mt-1" onClick={setPortfolio}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn mt-1" onClick={setContact}>Contact</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn mt-1" onClick={setResume}>Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
