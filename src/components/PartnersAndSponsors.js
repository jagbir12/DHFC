import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Col, Row, Card} from 'react-bootstrap'
import img4 from "../images/Akron.png"
import img5 from "../images/BDMS 2021.png"
import img6 from "../images/dada di.png"
import img7 from "../images/darwin nme.png"
import img8 from "../images/Expert.png"
import img9 from "../images/FNT_CMYK_VERT_Black_Solid_LOGO.png"
import img10 from "../images/Rhino Industries.png"
import img11 from "../images/Wealthmax Home Loans Logo.png"
import img12 from "../images/WonderWhite_Master_logo_RGB.png"

function PartnersAndSponsors() {
    return(
        <div style={{paddingTop:"18px", paddingBottom:"18px"}}>
            <Card style={{boxShadow: "0px 6px 6px 6px rgba(0,0,0,.1)" }}>
                <Card.Body>
                    <Card.Title>PARTNERS AND SPONSORS</Card.Title>
                    <Row style={{paddingTop:"3px"}}>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src={img4} />
                                <Card.Img variant="top" src={img7} />
                            </Card>
                        </Col>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src={img5} />
                            </Card>
                        </Col>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src={img6} />
                            </Card>
                        </Col>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>  
                                <Card.Img variant="top" src={img12} />
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:"3px"}}>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src={img11} />  
                                <Card.Img variant="top" src={img8} />
                            </Card>
                        </Col>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src={img9} />
                            </Card>
                        </Col>
                        <Col style={{paddingTop:"3px"}}>
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src={img10} />
                            </Card>
                        </Col>
                        <Col style={{paddingTop:"3px"}}>
                            {/* blank */}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            
        </div>
    );
}

export default PartnersAndSponsors;

