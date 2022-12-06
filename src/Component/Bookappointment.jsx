import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import '../Styles/Bookappointment.css'

export default function Bookappointment() {
    return (
        <>
            <section className='book_appointment'>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className="book_appointment_area">
                                <Row>
                                    <Col sm={6}>
                                        <div className="book_appointment_content">
                                            <b>Book Appointment</b>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aliquam esse vel error vitae ipsa ad magnam.</p>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="book_appointment_info">
                                            <div className="icon"><span><Image alt='Book Aportment' src="https://img.icons8.com/3d-fluency/94/null/filled-message.png" /></span> Email</div>
                                            <Form className='appointment_form'>
                                                <Form.Group className="mb-3" controlId="formappointment_mail">
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                    <Button type='button' className='HOVER green_btn get_app_btn'><span></span> <text>Get Appointment</text></Button>
                                                </Form.Group>
                                            </Form>
                                            <ul className='quick_notes_listing'>
                                                <li className="quick_notes"><span><i className="fa-solid fa-check"></i></span> Boost SEO rankings</li>
                                                <li className="quick_notes"><span><i className="fa-solid fa-check"></i></span> Boost SEO rankings   </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
