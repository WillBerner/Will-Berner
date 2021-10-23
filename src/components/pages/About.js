import React from 'react'

export default function About() {

    const profilePicStyle = {
        maxHeight: '250px',
        maxWidth: '250px',
    }

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
                <p className="my-4">
                    My name is Will and I'm a recent graduate of UNC Chapel Hill's Deptartment of Computer Science. I'm now taking a Coding Bootcamp to continue to learn new technologies and build my skill set! I love any sort of programming, but enjoy creating Javascript web projects the most.
                </p>
                <p className="my-4">
                    I'm a long time resident of the triangle area, specifically Chapel Hill. I got into computer science when I was still young in Middle School through building custom computers. I thought technology and computers were so important considering how much I used them daily so I thought I'd demystify the magic myself and learn how it all happens. I ended up acing my first programming course at UNC, was recruited to be an LA, and went on to help teach the course for the next five semesters.
                </p>
                <p className="mt-4 mb-5">
                    I'm now in the process of applying for full-time positions around the central NC area. When I don't have VSCode pulled up I'm out running, hiking or biking, watching soccer, or playing with my two year old dog, Sudo.
                </p>
            </div>

        </div>
    )
}
