import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/main.png"

const About = () => {
    return (
        <div id="about">
            <h2>About Me</h2>
            <div>
                <div>
                    <img src={img} alt="profile" />
                </div>
                <div>
                    <p>Hello, I am a 2023 Electrical Engineering Graduate from NIT Hamirpur, specializing in web development. With experience in Full Stack Development on the MERN stack, I have successfully completed projects such as Movix, a movie catalogue web app, ClipHUB, a video clip web app, Simon Game, a memory-based game, and a personal portfolio website built with ReactJS and SCSS. I am passionate about creating innovative web solutions that enhance user experiences.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
