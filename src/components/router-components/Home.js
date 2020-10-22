import React from 'react';

const Home = () => {
    return (
        (
            <div>
                <img src="./profile.jpg" />
                <div>
                <p className="large">Pushpak Singirikonda</p>
                <p className="fullstack">FullStack Developer</p>
                </div>
                <div className="flex-container-row height-10vh">
                    <i className="fa fa-github margin-l-r"
                    onClick={() => {
                        window.open('https://github.com/pushpak-fullstackdev')
                    }}
                    aria-hidden="true"></i>
                    <i className="fa fa-linkedin margin-l-r" 
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/pushpaksingirikonda')
                    }}
                    aria-hidden="true"></i>
                    <i className="fa fa-instagram margin-l-r" 
                    onClick={() => {
                        window.open('https://www.instagram.com/singirikonda/')
                    }}
                    aria-hidden="true"></i>
                    <i className="fa fa-facebook margin-l-r"
                    onClick={() => {
                        window.open('https://www.facebook.com/pushpak2255')
                    }}
                    aria-hidden="true"></i>
                </div>
            </div>
        )
    )
}

export default Home;