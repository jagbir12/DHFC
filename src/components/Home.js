import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../images/img-1.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"
import img4 from "../images/Akron.png"
import img5 from "../images/BDMS 2021.png"
import img6 from "../images/dada di.png"
import img7 from "../images/darwin nme.png"
import img8 from "../images/Expert.png"
import img9 from "../images/FNT_CMYK_VERT_Black_Solid_LOGO.png"
import img10 from "../images/Rhino Industries.png"
import img11 from "../images/Wealthmax Home Loans Logo.png"
import img12 from "../images/WonderWhite_Master_logo_RGB.png"

import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
        <Row style={{paddingTop: "1px", paddingBottom:"10px"}}>
            <Col>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Row style={{paddingTop: "10px", paddingBottom:"10px"}}>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img4} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img5} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img6} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img7} />
                </Card>
            </Col>
        </Row>
        <Row style={{paddingTop: "10px", paddingBottom:"10px"}}>
        <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img8} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img9} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img10} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Img variant="top" src={img11} />
                </Card>
            </Col>
        </Row>
        
    </Container>
  );
}