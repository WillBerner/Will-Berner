import React from 'react'

export default function Teaching() {

    const FredBrooksStyle = {
        maxHeight: '300px',
        maxWidth: '500px',
    }

    const OpenHouseStyle = {
        maxHeight: '500px',
        maxWidth: '500px',
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <h2 className="mb-5 text-center">Teaching Experience</h2>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-12">
                    <img src="./assets/images/FredBrooks.jpg" className="rounded img-responsive center-block d-block mx-auto" alt="Dr Fred Brooks and the COMP 110 Team" title="Dr Fred Brooks and the COMP 110 Team" style={FredBrooksStyle} />
                    <p className="text-center">Turing Award winner Dr Fred Brooks and the COMP 110 TA Team</p>
                </div>
            </div>

            <div className="row justify-content-center mb-5">
                <div className="row mx-3">
                    <h6 className="text-center">
                        During my undergraduate studies at UNC-Chapel Hill, I worked in the Computer Science Department as Undergraduate Teaching Assistant for three different classes across six semesters, including one Summer semester.
                    </h6>
                </div>
            </div>

            <div className="row justify-content-around mb-3">

                <div className="col-lg-4 col-md-12 mb-3">
                    <h4 className="text-center">
                        COMP 110: Intro to Programming
                    </h4>
                    <p className="text-center">
                        <small>
                            January 2017 - August 2019
                        </small>
                    </p>
                    <p className="text-center">
                        My first teaching experience came when I was a second-semester freshman. After completing my first programming class in the fall, COMP 110, I was one of a few selected from over 120 applicants by my professor Kris Jordan to join the TAing team for the 700-student course.
                    </p>
                    <p className="text-center">
                        First teaching in Java and later in TypeScript after the course changed languages, my main responsibilities were to tutor students one-on-one to help them complete assignments or review concepts and to help in the huge lectures when students had questions about in-class activities. Throughout my time with COMP 110, I individually tutored over 250 different students on over 350 separate occasions. I also mentored at semesterly hackathons, graded tests and quizzes, and answered student emails.
                    </p>
                </div>

                <div className="col-lg-4 col-md-12 mb-3">
                    <h4 className="text-center">
                        COMP 101: Intro to Computing
                    </h4>
                    <p className="text-center">
                        <small>
                            August 2018 - August 2019
                        </small>
                    </p>
                    <p className="text-center">
                        Eventually, our department decided to hand over control of COMP 101 to Kris and the TAing team for COMP 110, starting the "COMP 1101" team.
                    </p>
                    <p className="text-center">
                        COMP 101 was very similar to COMP 110, teaching programming essentials in TypeScript, but was less rigorous and contained less content than its sister course. My responsibilities for the 300-student course were the same as they were for COMP 110; primarily tutoring during my "office hours" and assisting students in class, but also grading, answering student emails, and working at hackathons.
                    </p>
                </div>

                <div className="col-lg-4 col-md-12 mb-3">
                    <h4 className="text-center">
                        COMP 116: Intro to Scientific Programming
                    </h4>
                    <p className="text-center">
                        <small>
                            May 2020 - July 2020
                        </small>
                    </p>
                    <p className="text-center">
                        I concluded my time at UNC-Chapel Hill as a Teaching Assistant for a third class, COMP 116, during the first Summer session (or "Maymester") of 2020.
                    </p>
                    <p className="text-center">
                        I was hired in the Spring by Professor Marc Neithammer, whom I knew of through my research experience in the department, to work alongside the instructor, graduate student Tom Christy, and three other TAs. This course was taught in Python and focused less on foundational programming fundamentals and more on applied uses for programming to help analyze scientific data, usually in the form of CSVs. I was responsible for grading assignments, tests, and answering student emails for one-fifth of the class, split between the four TAs and Tom. I also held one-on-one tutoring sessions for a few hours each week and wrote problems to help students practice their skills.
                    </p>
                </div>

            </div>

            <div className="row justify-content-around mb-5">
                <h6 className="text-center mb-3">
                    Some anonymous feedback I've received from some of the hundreds of students I've helped in my one-on-one tutoring:
                </h6>
                <ul className="list-group">
                    <li className="list-group-item text-center">"... it's always great working with Will."</li>
                    <li className="list-group-item text-center">"Made me realize I had the right idea when I started and guided me to fix the mistake. 7/7 TA."</li>
                    <li className="list-group-item text-center">"Will is a dope undergrad TA. I came in with a significant amount of code written ... and he helped point me in the right direction by ..."</li>
                    <li className="list-group-item text-center">"Explains well, really helps me understand the concepts."</li>
                    <li className="list-group-item text-center">"Great dude knows his stuff definitely deserves [an] award."</li>
                </ul>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-12">
                    <img src="./assets/images/OpenHouse.jpg" className="rounded img-responsive center-block d-block mx-auto" alt="Me explaing how Stereolithographic 3D printers work" title="Me explaing how Stereolithographic 3D printers work" style={OpenHouseStyle} />

                </div>
                <div className="col-lg-6 col-md-12">
                    <p className="text-center mx-5">Explaining how Stereolithographic 3D printers are used for research in the department during UNC Computer Science's 2019 Open House</p>
                </div>
            </div>
        </div>
    )
}
