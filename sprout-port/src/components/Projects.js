import React, { useState } from "react";

function Projects () {

    const [projects] = useState([
        {
            image: "codingNkolbods.jpg",
            alt: "Coding N Kolbods D&D",
            description: "A site where you can create and change characters for dungeon & dragons use.",
            tech: "(JavaScript / Node / MySQL / Handlebars)",
            url: "https://codingnkobolds.herokuapp.com/",
            git: "https://github.com/bennettem/coding-n-kobolds"
        },
        {
            image: "where2.png",
            alt: "Where 2",
            description: "A site where you can input 2 locations and compare the weather and cost of each location before you vacation.",
            tech: "(JavaScript / OpenWeather API / JQuery)",
            url: "https://bennettem.github.io/where2/",
            git: "https://github.com/bennettem/where2"
        },
        {
            image: "robot.png",
            alt: "Robot Gladiator Game",
            description: "An application where one can play a robot gladiator game",
            tech: "(JavaScript / HTML)",
            url: "https://bennettem.github.io/robot-gladiators/",
            git: "https://github.com/bennettem/robot-gladiators"
        },
        {
            image: "dice.png",
            alt: "Dice Game",
            description: "A dice game application where two users can roll a die and see who wins ",
            tech: "(JavaScript / HTML / CSS)",
            url: "https://bennettem.github.io/pig-game/",
            git: "https://github.com/bennettem/pig-game"
        },
        {
            image: "number.png",
            alt: "Guess my number",
            description: "A guessing game applcaition. A user inputs a number value and geusses until they get the mystery number correct.",
            tech: "(JavaScript / HTML, CSS)",
            url: "https://bennettem.github.io/guess-num/",
            git: "https://github.com/bennettem/guess-num"
        },
    ])

    return (

        <div>
            {projects.map((project, i) =>
            <div key={i}>
                <img src={require(`../images/${project.image}`).default} alt={project.alt} />
                <h2>{project.title}</h2>
                <p>{project.description} <br />
                <span>{project.tech}</span></p>
                <a href={project.url} target="_blank" rel="noreferrer">View Site</a>
                            <a href={project.git} target="_blank" rel="noreferrer">
                </a>
            </div>
            )}
        </div>
    )
}

export default Projects;