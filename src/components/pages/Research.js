import React from 'react'

export default function Research() {

    const telepresenceStyle = {
        maxHeight: '500px',
        maxWidth: '600px'
    }

    const linkStyle = {
        color: 'black'
    }

    const researchPicsStyle = {
        maxHeight: '400px',
        maxWidth: '400px'
    }

    const contastTestStyle = {
        maxHeight: '500px',
        maxWidth: '700px'
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center mb-4">
                <h2 className="text-center">Research Experience</h2>
                <p className="text-center"><a href="https://telepresence.web.unc.edu/people/" target="_blank" rel="noreferrer" style={linkStyle}> UNC Chapel Hill Telepresence (Graphics and VR) Research Group</a></p>
                <p className="text-center"><small>April 2018 - August 2020</small></p>
            </div>

            <div className="row mb-4 justify-content-center">
                <div className="col-12">
                    <img src="./assets/images/Telepresence.jpg" className="rounded img-responsive center-block d-block mx-auto" alt="UNC Graphics and Virtual Reality Research Group" title="UNC Graphics and Virtual Reality Research Group" style={telepresenceStyle} />
                    <p className="text-center"> UNC-Chapel Hill's Telepresence (Graphics and VR) Research Group - 2019. I'm on the far right.</p>
                </div>
            </div>

            <div className="row justify-content-center mb-3">
                <div className="row mb-5">
                    <h6 className="text-center mb-4">
                        In addition to teaching the joys of coding to new programmers at UNC-Chapel Hill, as an undergraduate I assisted with research for over two years in the Computer Science Department under Distinguished Professor Dr Henry Fuchs as part of the Graphics and Virtual Reality Research Group.
                    </h6>
                    <h6 className="text-center">
                        My responsibilities differed depending on the ad-hoc teams with whom I worked. My main duty was to assist a handful of graduate students and research scientists in the group with various studies and tests.
                    </h6>
                </div>
                <div className="row mt-4 justify-content-between">
                    <h4 className="text-center mb-4"><a href="https://telepresence.web.unc.edu/research/dynamic-focus-augmented-reality-display/" target="_blank" rel="noreferrer" style={linkStyle}>
                        Dynamic Focus Augmented Reality Display
                    </a>
                    </h4>
                    <div className="col-lg-4 col-sm-12 mb-3">
                        <img src="./assets/images/Aliens.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto" alt="Deformable Membrane Display" title="Deformable Membrane Display" />
                        <p className="text-center">
                            Three aliens at adjustable focal depths seen through the near-eye deformable membrane display.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3">
                        <img src="./assets/images/Setup.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto" alt="Deformable Membrane Display Setup" title="Deformable Membrane Display Setup" />
                        <p className="text-center">
                            Headstand display, controlled by a system of hoses, valves, speakers, motors, pressure sensors, and an Arduino.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-3">
                        <img src="./assets/images/ContrastTest.jpeg" style={researchPicsStyle} className="img-responsive center-block d-block mx-auto" alt="Contrast Tests I performed" title="Contrast Tests I performed" />
                        <p className="text-center">
                            Contrast test I ran to determine the effect of multiple beamsplitters on the luminance of an image.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-around mb-3">

                <p className="text-center">
                    The project I assisted with in the group was the Dynamic Focus Augmented Reality Display project. I worked closely with PhD candidate and leader of the project David Dunn as we attempted to create a near-eye augemented reality display with dynamic focus using see-through deformable membranes. The membranes would deform with pressue from pumps to adjust for the user's near or far focal point. My largest responsibilty for the project was to create the sensitive deformable membranes in the cleanroom of <a href="https://chanl.unc.edu/" target="_blank" rel="noreferrer" style={linkStyle}>Chapel Hill's Analytical and Nanofabrication Laboratory</a> using processes such as degassing, spin-coating, sputter deposition, etc. We then used these membranes by placing them in housings and also sent them to our project collaborators at the <a href="https://www.mpi-inf.mpg.de/home" target="_blank" rel="noreferrer" style={linkStyle}>Max Planck Institut Informatik</a> for them to use.
                </p>

                <p className="text-center">
                    For the same project, I ran contrast tests to determine how the presence of one or more beamsplitters would impact the luminance of an image as there were concerns they would detract from the image's brightness. To test this I arranged two different sized beamsplitters, a HoloPro with a projector, and a back display behind one another in all possible permutations, taking photos each time to see how each layer contributed independently.
                </p>

                <img src="./assets/images/ContrastSetup.jpeg" style={contastTestStyle} className="img-responsive center-block d-block mx-auto mt-4" alt="Deformable Membrane Display" title="Deformable Membrane Display" />
                <p className="text-center">
                    Contrast test setup. All permutations were tested and recorded.
                </p>

            </div>

            <div className="row justify-content-around mb-3">
                <p className="text-center">
                    More to come soon.
                </p>
            </div>

        </div>
    )
}
