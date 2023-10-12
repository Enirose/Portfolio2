import React from "react";
import Intro from "../MyIntro";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import MyProjects from "../Projects";



export default function Portfolio () {
    return (
        <div>
            <Intro />
            <div id="projects">
                <MyProjects />
            </div>
            <div id="about">
                <AboutMe />
            </div>
            <div id="contact">
                <ContactMe />
            </div>
        </div>   
    )
}