import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "../Styles/Header.css"
import image1 from '../images/brand_logo.png'


const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	if (element.classList[1] === "FLASH") {
		element.addEventListener("animationend", e => {
			element.classList.remove(ANIMATEDCLASSNAME);
		});
		addAnimation = true;
	}

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});


function Header() {
    return (
        <section className="Header_area">
            <Container>
                <Row>
                    <Col sm={12}>
                        <Navbar bg="" expand="lg">
                            <Navbar.Brand href="#"> <Image src={image1} alt='ghg' /> </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="ml-auto my-2 my-lg-0"

                                >
                                    <Nav.Link href="#" className='navitem'>Home</Nav.Link>
                                    <Nav.Link href="#" className='navitem'>About Us</Nav.Link>
                                    <Nav.Link href="#" className='navitem'>Services <span><i className="fa-solid fa-chevron-down"></i></span>
                                        <ul className="navdropdown">
                                            <li><Nav.Link href='#'>Service1</Nav.Link></li>
                                            <li><Nav.Link href='#'>Service1</Nav.Link></li>
                                            <li><Nav.Link href='#'>Service1</Nav.Link></li>
                                            <li><Nav.Link href='#'>Service1</Nav.Link></li>
                                        </ul>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='navitem'>Contact us </Nav.Link>
                                    <Nav.Link href="#" className='navitem'>Pages <span><i className="fa-solid fa-chevron-down"></i></span>
                                    <ul className="navdropdown">
                                            <li><Nav.Link href='#'>Pricing</Nav.Link></li>
                                            <li><Nav.Link href='#'>FAQs</Nav.Link></li>
                                            <li><Nav.Link href='#'>Carrers</Nav.Link></li>
                                        </ul>
                                    </Nav.Link>
                                    
                                </Nav>
                                <Form className="d-flex">
                                    <Link className="HOVER white_btn" to={'/'}>
                                        <span></span>
                                        <text>Log In</text>
                                    </Link>
                                    <Link className="HOVER green_btn" to={'/'}>
                                        <span></span>
                                        <text>Sign Up</text>
                                    </Link>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;
