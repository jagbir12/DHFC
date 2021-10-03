import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'

function History() {
    return(
        <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <Card style={{boxShadow: "0px 6px 6px 6px rgba(0,0,0,.1)" }}>
                <Card.Body>
                    <Card.Title>HISTORY</Card.Title>
                    <Card.Text>
                        <p style={{ fontFamily: 'sans-serif' }}>
                            Darwin Hearts FC is non-profit sports organisation established in 2010 under the management of Nepalese Association of Northern Territory Inc., referred as NANT hereafter. It was a huge effort of football passionate Nepali youths residing in Darwin to socialise and harmonise with the sole sports activities. Therefore, in the beginning it was limited to a fun and fitness activity for us where many non-Nepali locals and foreigner friends joined the activities regularly. Along with the time everyone was getting better with their skills and they started believing in themselves to compete with similar other teams formed around and inter-state.
                        </p>
                        <p>
                        At the beginning of its formation in 2010 we were introduced by name of Youth United in NANT CUP. By that time, club succeeded to make its networking to youth attraction and formed a first squad for 2012 MIT Cup in Melbourne. At that time, we were funded by NANT to participate however rest of cost was self-managed by the players. It was a promising inspiration of teamwork by those individuals to trigger the initiation to form a better and well-funded club. Since then we were encouraged and dreamed to build up a team that can play NT League and introduce Nepalese Community in sports within a multicultural society of NT. We participated and represented Nepalese Community under NANT in MIT cup in 2012. Since then we have a first squad and participate in different leagues and tournaments representing Nepalese Community of Northern Territory across Australia. Finally, we registered our club with Football Federation of Australia of Northern Territory (FFANT) and Good Sports Club in 2015 as a DARWIN HEARTS FC under NANT subcommittee.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default History;

