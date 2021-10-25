import React from 'react'

export default function About() {

    // Restrain profile image size
    const profilePicStyle = {
        maxHeight: '250px',
        maxWidth: '250px',
    }

    // Render some basic "about me" info
    return (
        <div className="container mt-5">

            <div className="row justify-content-center">
                <div className="col">
                    <h1 className="text-center">
                        About Me
                    </h1>
                </div>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-md-auto">
                    <img src="./assets/images/me.jpeg" className="rounded-circle my-4 img-responsive center-block d-block mx-auto" alt="Me - Will Berner" style={profilePicStyle} />
                </div>
            </div>

            <div className="row mx-3">
                <h6 className="my-4 text-center">My name is Will and I'm a recent graduate of UNC-Chapel Hill's Department of Computer Science.</h6>
                <p className="my-4">
                    I'm currently taking a Coding Bootcamp to continue to learn new technologies and build my skill set while I apply to full-time roles. I love any sort of programming from OOP to functional, but enjoy creating Javascript web-based projects the most.
                </p>
                <p className="my-4">
                    I'm a long time resident of North Carolina's RTP area - specifically Chapel Hill. I got into computer science when I was in Middle School by building custom computers. I thought technology and computers were incredibly important considering how much I used them daily, so I thought I'd demystify the magic myself and learn how they work.
                </p>
                <p className="my-4">
                    As a Freshman I ended up acing my first programming course at UNC, was recruited to be an LA, and went on to help teach intro courses for the next five semesters. With languages such as Java, Javascript, and Python, I've taught a wide range of topics from Object-Oriented to Functional Programming, ES6 and higher-order functions, the difference between reference and value types, and parsing scientific data for analysis.
                </p>
                <p className="mt-4 mb-5">
                    I'm now in the process of applying for full-time positions around the central NC area. When I don't have VSCode pulled up I'm out running, hiking, biking, watching soccer, or playing with my two-year-old dog, Sudo.
                </p>
            </div>

        </div>
    )
}
