import React from 'react';
import { Carousel } from 'react-bootstrap';
import SlideImage1 from "../images/Slide-Image-1.jpg";
import SlideImage2 from "../images/Slide-Image-2.jpg";
import SlideImage3 from "../images/Slide-Image-3.jpg";
import SlideImage4 from "../images/Slide-Image-4.jpg";
import SlideImage5 from "../images/Slide-Image-5.jpg";
import SlideImage6 from "../images/Slide-Image-6.jpg";
import SlideImage7 from "../images/Slide-Image-7.jpg";
import SlideImage8 from "../images/Slide-Image-8.jpg";

import sponsors from "../images/major sponsors.png"

import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
        <Row style={{paddingTop: "3px", paddingBottom:"3px"}}>
            <Col style={{paddingTop: "3px", paddingBottom:"3px"}}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src={SlideImage1} alt="First slide"/>
                        <Carousel.Caption>
                        <h1>Welcome to Darwin Hearts Football Club</h1>
                        {/* <p>Darwin Hearts FC is non-profit sports organisation established in 2010 under the management of Nepalese Association of Northern Territory Inc., referred as NANT hereafter. It was a huge effort of football passionate Nepali youths residing in Darwin to socialise and harmonise with the sole sports activities. Therefore, in the beginning it was limited to a fun and fitness activity for us where many non-Nepali locals and foreigner friends joined the activities regularly. Along with the time everyone was getting better with their skills and they started believing in themselves to compete with similar other teams formed around and inter-state.</p> */}
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage2} alt="Second slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage3} alt="Third slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage4} alt="Fourth slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage5} alt="Fifth slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage6} alt="Sixth slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage7} alt="Seventh slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage8} alt="Eighth slide"/></Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>  */}
                </Carousel>
            </Col>
        </Row>
        <Row style={{paddingTop: "3px", paddingBottom:"3px"}}><Col style={{paddingTop: "3px", paddingBottom:"3px"}}>SPONSORS</Col></Row>
        <Row style={{paddingTop: "3px"}}>
            <Col>
                <Card>
                    <Card.Img variant="top" src={sponsors} />
                </Card>
            </Col>
        </Row>
    </Container>
  );
}
