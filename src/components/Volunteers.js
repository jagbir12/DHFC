import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'react-bootstrap'

function Volunteers() {
    return(
        <div style={{paddingtop: "2px"}}>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Volunteering site</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abin Gurung</td>
                    <td>Events</td>
                </tr>
                <tr>
                    <td>Amit Parajuli</td>
                    <td>Media and events</td>
                </tr>
                <tr>
                    <td>Anjan Paudel</td>
                    <td>Photography and media</td>
                </tr>
                <tr>
                    <td>Arun Sharma Phuyal</td>
                    <td>Match day and events</td>
                </tr>
                <tr>
                    <td>Ashish Bhusal</td>
                    <td>Events</td>
                </tr>
                <tr>
                    <td>Ashok Adhikari</td>
                    <td>Match days and events</td>
                </tr>
                <tr>
                    <td>Bishal Gurung</td>
                    <td>Events and catering</td>
                </tr>
                <tr>
                    <td>BP Bhandari</td>
                    <td>Photography and events</td>
                </tr>
                <tr>
                    <td>Divya Paudel</td>
                    <td>Match day</td>
                </tr>
                <tr>
                    <td>Fursangbu Sherpa</td>
                    <td>Events</td>
                </tr>
                <tr>
                    <td>Ganga Gurung</td>
                    <td>Catering and events</td>
                </tr>
                <tr>
                    <td>Laxman Aryal</td>
                    <td>Events and catering</td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default Volunteers;