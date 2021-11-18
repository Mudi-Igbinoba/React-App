import { useState } from 'react';
import { Row, Col, Card} from "react-bootstrap";
import { BsPlusLg} from 'react-icons/bs'
import {characters} from "./DetailsList"
import CharacterModal from './CharacterModal';
import CharacterSidebar from './CharacterSidebar';

const CharacterCards = () => {
    // const [ IsOpen, setIsOpen] = useState(false)


    // let handleClick = () => {
    //     setIsOpen(!IsOpen)
    // }

    const [show, setShow] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [showSidebar, setShowSidebar] = useState(false);

    const handleCloseSidebar = () =>  {
        setShowSidebar(false);
        let cards = document.querySelector('.character-cards')
        cards.style.border = "none";
    }
    const handleShowSidebar = () => {
        let cards = document.querySelector('.character-cards')
        cards.style.border = "2px solid #121c33";
        setShowSidebar(true);
    }


    return (
        <div>

           <Row xs={1} md={2} lg={3} xl={4} className="g-3">
            {characters.map(character => (
            <Col key={character.id}>
                <Card id="character-cards" className="h-100 character-cards" onClick={handleShowSidebar}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                    {character.friends} friends
                    </Card.Text>
                </Card.Body>
                </Card>

            </Col>
            ))}

        </Row>
            
        <BsPlusLg className="plus-circle" onClick={handleShowModal} />
        
            
        <CharacterModal show={showModal} close={handleCloseModal}/>      
           
         <CharacterSidebar  show={showSidebar} close={handleCloseSidebar} />  
        </div> 
    )
}

export default CharacterCards
