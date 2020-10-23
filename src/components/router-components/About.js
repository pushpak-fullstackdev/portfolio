import React from 'react';

const About = () => {
    return (
        (
            <div className="width100 flex-container-col">
                <div className="myintro height-5vh">My Intro</div>
                <div className="aboutme height-10vh">About Me</div>
                <div className="about-grid height-80vh">
                    <div>
                        <div>
                            <p>
                                Hi i am a full stack dev,
                                passionate about creating and developing
                                web interfaces i have many years of
                                experience in this area of work, with multiple quality projects
                                </p>
                        </div>
                        <div className="text-center">
                            <img src="./profile.jpg"></img>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Information</h1>
                            <div className="flex-col">
                                <div>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <h4>Pushpak Singirikonda</h4>
                                </div>
                                <div>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <h4>+91 9963791780</h4>
                                </div>
                                <div>
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                    <h4>pushpak.chin@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Experience</h1>
                            <div className="flex-col">
                                <div>
                                    <i class="fa fa-certificate" aria-hidden="true"></i>
                                    <h4>3+ years of experience</h4>
                                </div>
                                <div>
                                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                                    <h4>10+ projects</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Education</h1>
                            <div className="flex-col">
                                <div>
                                <i class="fa fa-university" aria-hidden="true"></i>
                                    <h4>Btech Graduate, Anurage College CSE</h4>
                                </div>
                                <div>
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                    <h4>10+ Narayana</h4>
                                </div>
                                <div>
                                <i class="fa fa-id-card" aria-hidden="true"></i>
                                <h4>10 Narayana</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default About;