import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Styles/Banner.css';
import Bannerdata from './Bannerdata';
import { Link } from 'react-router-dom';

export default function Banner(props) {
    return (
        <>
            <section className='banner_section'>
                <OwlCarousel className='owl-theme banner_slider' items="1" loop margin={10} dots="false">
                    {
                        Bannerdata.map((Bannerdataval, index) => (
                            <div className='banner_item' key={index}>
                                <Image src={Bannerdataval.imageLink} />
                                <div className="banner_overley">
                                    <Container>
                                        <Row>
                                            <Col sm={6}>
                                                <b>{Bannerdataval.bannertext}</b>
                                                <h1>Best IT-Solutions near the world</h1>
                                                <span>Dolor sit amet consectetur elit sed do eiusmod tempor incidi dunt labore et dolore magna.</span>

                                                <Link className="HOVER green_btn larnmore" to={'/'}>
                                                    <span></span>
                                                    <text>Read More</text>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </section>
        </>
    )
}
