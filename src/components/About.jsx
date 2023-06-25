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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta maiores qui accusantium consectetur consequatur sint quae blanditiis in praesentium tempore provident laudantium magni incidunt ad error at, laborum consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta maiores qui accusantium consectetur consequatur sint quae blanditiis in praesentium tempore provident laudantium magni incidunt ad error at, laborum consequuntur!</p>
                </div>
            </div>
        </div>
    );
};

export default About;