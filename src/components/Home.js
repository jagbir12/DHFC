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

import goldSponsor1 from "../images/Gold Sponsor - Rhino Industries.png"
import goldSponsor2 from "../images/Gold Sponsor - NME.png"
import goldSponsor3 from "../images/Gold Sponsor - Dada Di.png"

import majorSponsor1 from "../images/Major Sponsor - Akron.png"
import majorSponsor2 from "../images/Major Sponsor - KBA Global.jpg"
import majorSponsor3 from "../images/Major Sponsor - InnovativeWealth_Darwin.png"

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
        <Row style={{alignContent:"center", paddingTop: "3px", paddingBottom:"3px"}}>
            <Col>
                <Card style={{ width: '14rem', backgroundColor:"#f1611c"}}>
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
                <Card style={{ width: '14rem', backgroundColor:"#f1611c"}}>
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
                <Card style={{ width: '14rem', backgroundColor:"#f1611c"}}>
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
                <Card style={{ width: '14rem', backgroundColor:"#f1611c"}}>
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
                <Card onMouseOver style={{ width: '14rem', backgroundColor:"#f1611c"}}>
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
        <Row style={{backgroundColor:"#0d5091", color:"white", paddingTop: "3px", paddingBottom:"3px", alignContent:"center"}}><Col style={{paddingTop: "3px", paddingBottom:"3px"}}>MAJOR SPONSORS</Col></Row>
        <Row style={{backgroundColor:"#0d5091", paddingTop: "3px", paddingBottom:"3px"}}>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Img variant="top" src={majorSponsor1} />                           
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Img variant="top" src={majorSponsor2} />                           
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Img variant="top" src={majorSponsor3} />                           
                </Card>
            </Col>
        </Row>
        <Row style={{paddingTop: "3px", paddingBottom:"3px"}}><Col></Col></Row>
        <Row style={{backgroundColor:"#7a720c", color:"white", paddingTop: "3px", paddingBottom:"3px", alignContent:"center"}}><Col style={{paddingTop: "3px", paddingBottom:"3px"}}>GOLD SPONSORS</Col></Row>
        <Row style={{backgroundColor:"#7a720c", padding:"3px 600px 5px 3px"}}>
            <Col>
                <Card style={{ width: '12.5rem', height: '12.5rem' }}>
                    <Card.Img variant="top" src={goldSponsor1} />                           
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12.5rem', height: '12.5rem' }}>
                    <Card.Img variant="top" src={goldSponsor2} />                           
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '12.5rem', height: '12.5rem' }}>
                    <Card.Img variant="top" src={goldSponsor3} />                           
                </Card>
            </Col>
        </Row>
    </Container>
  );
}
