import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand h1 mb-0" href="#/">Will Berner</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
