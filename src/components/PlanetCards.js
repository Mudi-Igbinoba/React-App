import React from 'react'
import { useState } from 'react';
import { Row, Col, Card} from "react-bootstrap";
import { BsPlusLg} from 'react-icons/bs'
import PlanetModal from './PlanetModal';



const PlanetCards = ({data}) => {
    // const [ IsOpen, setIsOpen] = useState(false)


    // let handleClick = () => {
    //     setIsOpen(!IsOpen)
    // }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {/* {IsOpen && <PlanetSidebar />} */}




           <Row xs={1} md={4} className="g-3" id="planet-row">
            {data.map(planet => (
            <Col key={planet.id}>
                <Card id="planet-cards" >
                <Card.Img variant="top" src={planet.image} />
                <Card.Body>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text>
                    pop: {planet.pop}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}  


        </Row>
            
     <BsPlusLg className="plus-circle" onClick={handleShow} />
        
            
     <PlanetModal show={show} close={handleClose}/>      
        </div> 
    )
}

export default PlanetCards
