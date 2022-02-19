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

import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid>
        <Row style={{paddingTop: "3px", paddingBottom:"3px"}}>
            <Col style={{paddingTop: "3px", paddingBottom:"3px"}}>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src={SlideImage1} alt="First slide"/>
                        <Carousel.Caption>
                        <h1>Welcome to Darwin Hearts Football Club</h1>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage2} alt="Second slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage3} alt="Third slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage4} alt="Fourth slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage5} alt="Fifth slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage6} alt="Sixth slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage7} alt="Seventh slide"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src={SlideImage8} alt="Eighth slide"/></Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Row style={{paddingTop: "3px", paddingBottom:"3px"}}><Col style={{paddingTop: "3px", paddingBottom:"3px", alignItems:"center"}}>REGISTRATIONS</Col></Row>
        <Row style={{alignContent:"center"}}>
            <Col>
                <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Title>Become a Player</Card.Title>
                        <Card.Text>
                            Registration for a senior player.
                        </Card.Text>
                        <Button variant="primary" href="https://registration.playfootball.com.au/common/pages/reg/welcomeregplus.aspx?entityid=75620&id=81229">Seniors</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Title>Become a Player</Card.Title>
                        <Card.Text>
                            Registration for the age group 12-18 Years Old.
                        </Card.Text>
                        <Button variant="primary" href="https://registration.playfootball.com.au/common/pages/reg/welcomeregplus.aspx?entityid=75620&id=89310">Juniors</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Title>Become a Player</Card.Title>
                        <Card.Text>
                            Registration for MiniRoos U6-U11.
                        </Card.Text>
                        <Button variant="primary" href="https://registration.playfootball.com.au/common/pages/reg/welcomeregplus.aspx?entityid=75620&id=81227">Miniroos</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Title>Become a Coach</Card.Title>
                        <Card.Text>
                            Registration for a Coach. <br/><br/>
                        </Card.Text>
                        <Button variant="primary"  href="https://registration.playfootball.com.au/common/pages/reg/welcomeregplus.aspx?entityid=75620&id=81230
">Coach</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Title>Become a Volunteer</Card.Title>
                        <Card.Text>
                            Registration for a volunteer.
                        </Card.Text>
                        <Button variant="primary" href="https://registration.playfootball.com.au/common/pages/reg/welcomeregplus.aspx?entityid=75620&id=81230
">Volunteer</Button>
                    </Card.Body>
                </Card>
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
