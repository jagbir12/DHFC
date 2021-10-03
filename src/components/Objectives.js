import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'

function Objectives() {
    return(
        <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <Card style={{boxShadow: "0px 6px 6px 6px rgba(0,0,0,.1)" }}>
                <Card.Body>
                    <Card.Title>Our objectives and vision are:</Card.Title>
                    <Card.Text>
                    <p>
                        <ul>
                            <li>A healthy and safe sports ethics and training</li>
                            <li>Provide training to kids (aged over 6) and adults (only men at the moment due to less than minimum required requests from ladies) of any ethnicity</li>
                            <li>Create opportunities to all community kids, youths and members to pursue their passionate career.</li>
                            <li>Maintain love, peace and harmony within wider communities via sports events and keep up the Territorian spirit.</li>
                            <li>Encourage ladies from wider community to participate in the sport.</li>
                            <li>Follow up and adapt Football Federation of Australia’s training methods.</li>
                            <li>Build up State A-Level Team.</li>
                        </ul>
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Objectives;

