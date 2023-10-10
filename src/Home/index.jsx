import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SwiperCarousel from "../Projects";
import 'swiper/css'
import Intro from "../MyIntro";
import AboutMe from "../AboutMe";



export default function Portfolio () {
    return (
        <div>
            <Intro/>
            <hr />
            <AboutMe/>
                <SwiperCarousel/>
        </div>
        
    )
}