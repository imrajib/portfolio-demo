import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import '../Styles/About.css';
import aboutimg from '../images/about.png'

function About() {
    return (
        <section className="about_sec">
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="about_info">
                            <h6>about us</h6>
                            <b>Let Us Be Your Next <span>Preferred IT Partner</span></b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde doloribus officia quia rerum, explicabo aut suscipit sequi, beatae ad eos ipsum possimus nisi eius esse delectus. Voluptas, at odio!</p>
                        </div>
                        <ul className="info_listing">
                            <li><span><i className="fa-solid fa-check"></i></span> We are committed to providing quality IT Services</li>
                            <li><span><i className="fa-solid fa-check"></i></span> Our benefits are endless for local IT Companies & Startups</li>
                            <li><span><i className="fa-solid fa-check"></i></span> Really know the true needs and expectations of customers </li>
                            <li><span><i className="fa-solid fa-check"></i></span> Talented & experienced management solutions for IT</li>
                            <li><span><i className="fa-solid fa-check"></i></span> Processes of achieving the excellence and continue improvements</li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                        <div className="about_img">
                            <Image src={aboutimg} alt="about img"/>

                            <div className="years_ex"><b>05</b> Years of experience
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default About;