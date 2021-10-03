import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Table, Card} from 'react-bootstrap'

function Achievements() {
    return(
        <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <Card style={{boxShadow: "0px 6px 6px 6px rgba(0,0,0,.1)" }}>
                <Card.Body>
                    <Card.Title>Achievements</Card.Title>
                    <Card.Text>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Events</th>
                                <th>Year</th>
                                <th>Achievements</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>NANT Cup</td>
                                <td>2011</td>
                                <td>Winner</td>
                            </tr>
                            <tr>
                                <td>MIT Cup</td>
                                <td>2011</td>
                                <td>Participant</td>
                            </tr>
                            <tr>
                                <td>NANT Cup</td>
                                <td>2012</td>
                                <td>Winner</td>
                            </tr>
                            <tr>
                                <td>MIT Cup</td>
                                <td>2012</td>
                                <td>Participant</td>
                            </tr>
                            <tr>
                                <td>NANT Cup</td>
                                <td>2013</td>
                                <td>Winner</td>
                            </tr>
                            <tr>
                                <td>MIT Cup</td>
                                <td>2013</td>
                                <td>Participant</td>
                            </tr>
                            <tr>
                                <td>NANT Cup</td>
                                <td>2014</td>
                                <td>Winner</td>
                            </tr>
                            <tr>
                                <td>MIT Cup</td>
                                <td>2014</td>
                                <td>Participant and fair play award</td>
                            </tr>
                            <tr>
                                <td>Multi-cultural Cup, Darwin </td>
                                <td>2014</td>
                                <td>Semi-finalist</td>
                            </tr>
                            <tr>
                                <td>NANT Cup</td>
                                <td>2015</td>
                                <td>Winner</td>
                            </tr>
                            <tr>
                                <td>NT Division B Legue</td>
                                <td>2015</td>
                                <td>Fifth standing</td>
                            </tr>
                            <tr>
                                <td>NT Division B Legue</td>
                                <td>2016</td>
                                <td>Sixth standing</td>
                            </tr>
                            <tr>
                                <td>NANT Cup</td>
                                <td>2016</td>
                                <td>Organiser</td>
                            </tr>
                            <tr>
                                <td>G5 MFC Cup</td>
                                <td>2016</td>
                                <td>First runner-up</td>
                            </tr>
                            <tr>
                                <td>NRNA Inter-State Cup</td>
                                <td>2016</td>
                                <td>First runner-up</td>
                            </tr>
                            <tr>
                                <td>NT Men's Division One Legue</td>
                                <td>2017</td>
                                <td>First runner-up</td>
                            </tr>
                            <tr>
                                <td>G5 MFC Cup</td>
                                <td>2017</td>
                                <td>First runner-up</td>
                            </tr>
                            <tr>
                                <td>NT Men's Division One Legue</td>
                                <td>2018</td>
                                <td>First runner-up</td>
                            </tr>
                            <tr>
                                <td>G5 MFC Cup</td>
                                <td>2018</td>
                                <td>First runner-up</td>
                            </tr>
                            <tr>
                                <td>NT Men's Division One Legue</td>
                                <td>2019</td>
                                <td>Winner</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Achievements;