import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../Styles/SectionTitle.css'

function SectionTitle(props) {
    return (
        <Container>
            <Row className="justify-center">
                <Col sm={10}>
                    <div className="section_title">
                        <h6>{props.sectionh6}</h6>
                        <b>Something <span>About Us</span></b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium repellendus quasi impedit debitis harum odio vel dolore itaque voluptates, maxime, facilis minus? Odit itaque suscipit voluptatem nam laudantium perferendis.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionTitle;