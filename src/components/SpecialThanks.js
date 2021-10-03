import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'

function SpecialThanks() {
    return(
        <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <Card style={{boxShadow: "0px 6px 6px 6px rgba(0,0,0,.1)" }}>
                <Card.Body>
                    <Card.Title>Darwin Hearts FC thanks to all the individuals who helped develop the club since early days and ongoing supports for us. Listed are the individuals we extend our special thanks for their contribution for us to emerge and survive throughout the period:</Card.Title>
                    <Card.Text>
                        <p>
                            <ul>
                                <li>Founder squad member (Season 2011/15) DHFC Mr Purusottam Bista</li>
                                <li>Founder squad member and ex-captain (Season 2010/16) DHFC Mr Ajay Gurung</li>
                                <li>Founder squad member (Season 2015) Mr Dinesh Thapa</li>
                                <li>Founder squad member (Season 2010/14) Late Mr Zenith Malla</li>
                                <li>Coach/squad member (Season 2015/16) Mr Dylan Slater</li>
                                <li>Ex-President NANT and NRNA NT Mr Prakash Acharya and team</li>
                                <li>Ex-President NANT Mr Nitesh Raj Pant and team</li>
                                <li>Ex-President NANT Mr Ganesh Adhikari and team</li>
                                <li>Ex-Club Development Manager FFNT Mr Damon Aldritt</li>
                                <li>Ex-squad member (Season 2015/16) Mr Akash shrestha</li>
                                <li>Ex-squad member (Season 2015/16) Mr Liam Brandon</li>
                                <li>Ex-squad member (Season 2015) Mr Jivan Subedi</li>
                                <li>Photography and media (Season 2015/16) Mr BP Bhandari</li>
                                <li>Photography and media (Season 2014/16) Mr Amit Parajuli</li>
                                <li>Mrs Binita Karki, supporter</li>
                            </ul>
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SpecialThanks;

