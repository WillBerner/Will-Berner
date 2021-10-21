import React from 'react'

export default function Footer() {

    const iconStyle = {
        color: "#000000",
        fontSize: "2em"
    }

    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="d-flex justify-content-center">
                <a className="mx-4" href="https://github.com/WillBerner" target="_blank" rel="noreferrer">
                    <i className="bi-github" style={iconStyle}></i>
                </a>
                <a className="mx-4" href="https://www.linkedin.com/in/willberner/" target="_blank" rel="noreferrer">
                    <i className="bi-linkedin" style={iconStyle}></i>
                </a>
                <a className="mx-4" href="https://stackoverflow.com/users/16436500/will-berner" target="_blank" rel="noreferrer">
                    <i className="bi-stack-overflow" style={iconStyle}></i>
                </a>
            </div>
        </footer>
    )
}
