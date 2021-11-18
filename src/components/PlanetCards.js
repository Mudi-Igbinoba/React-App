import React from 'react'
import { useState } from 'react';
import { Row, Col, Card} from "react-bootstrap";
import { BsPlusLg} from 'react-icons/bs'
import PlanetModal from './PlanetModal';
import PlanetSidebar from './PlanetSidebar'


const PlanetCards = ({data}) => {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [showSidebar, setShowSidebar] = useState(false);

    const handleCloseSidebar = () =>  {
        setShowSidebar(false);
        let cards = document.querySelector('.planet-cards')
        cards.style.border = "none";
    }
    const handleShowSidebar = () => {
        let cards = document.querySelector('.planet-cards')
        cards.style.border = "2px solid #121c33";
        setShowSidebar(true);
    }
    return (
        <div>
            {/* {IsOpen && <PlanetSidebar />} */}




           <Row xs={1} lg={3} md={2} xl={4} className="g-3" id="planet-row">
            {data.map(planet => (
            <Col key={planet.id}>
                <Card id="planet-cards" className="planet-cards" onClick={handleShowSidebar}>
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
            
     <BsPlusLg className="plus-circle" onClick={handleShowModal} />
        
            
     <PlanetModal show={showModal} close={handleCloseModal}/>      
        
      <PlanetSidebar  show={showSidebar} close={handleCloseSidebar} />  
        
        
        </div> 
    )
}

export default PlanetCards
