import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SwiperCarousel from "../Projects";
import 'swiper/css'
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