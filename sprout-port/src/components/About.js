import React from "react";
import photo from "../images/about2.jpg"

function About () {
    return (
        <div>
            <h1>About me</h1>
            <p> ** small description place holder: abcdefghijklmnopqrstuvwxyz **
            </p>
            <img src={photo} alt="" />
        </div>
    );
}

export default About; 