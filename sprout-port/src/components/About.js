import React from "react";
import photo from "../images/about2.jpg"

function About () {
    return (
        <section>
        <div className="aboutMe">
            <h1>About me</h1>
            <p> Hi there! I'm Emily currently on the journey of becoming a software developer. 
            </p>
            <img src={photo} alt="" />
        </div>
        </section>
    );
}

export default About; 