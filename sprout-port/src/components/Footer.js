import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Footer () {
    return (
        <div className="footer">
            <footer>
                
            <a href="https://www.linkedin.com/in/epbennett/" target="blank">
            <FaLinkedin />
            </a>
            <a href="https://github.com/bennettem" target="blank">
            <FaGithub />
            </a>
            <h2> by yours truly</h2>
            <div>
                &copy; 2022
            </div>
            </footer>
        </div>
    );
}

export default Footer;

//improvements
// add icons to footer for github/linkedin