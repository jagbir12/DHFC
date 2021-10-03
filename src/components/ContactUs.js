import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card, Row, Col, Form, Button} from 'react-bootstrap'

function ContactUs() {
    return(
        <div style={{paddingTop: "10px"}}>
             <Row>
                <Col xs={12} md={8}>
                    <Card style={{ height: '22rem' }}>
                        <Card.Body>
                            <Card.Title>Darwin Hearts Football Club - Member Registration</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                <p>All the Darwin Hearts Football Club members including: Coaches, players, guardians of miniroos, management team and the volunteers must sign-up this form and keep updates with the club's contact list. Guardians of miniroos must fill-up this form for their kids.</p> 
                                <p>This form is to collect primary contact details of all the club members. All the details in this form will not be shared with any other organisations and DHFC abides by the privacy law of Australia. Although you must provide all the details of this form, you still may not accept the condition of visual/audio recording of yourselves for the club's promotion, you still need to accept the condition in this form and write us that you do not accept the condition which will be in effect after that email. All the visual/audio recording will be the property of DHFC and will be used for the club's promotional advertisements and other good purposes only.</p>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                    <Card style={{ height: '22rem' }}>
                        <Card.Body>
                            <Card.Title>More Info</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                <p>If you have any further queries and advice, please feel free to contact us.</p> 
                                <p>
                                    Email: info@darwinheartsfc.com.au <br/>
                                    Facebook:
                                    https://www.facebook.com/darwinhearts
                                </p>
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        
    );
}

export default ContactUs;