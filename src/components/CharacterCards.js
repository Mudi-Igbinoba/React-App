import { useState } from 'react';
import { Row, Col, Card} from "react-bootstrap";
import { BsPlusLg} from 'react-icons/bs'
import {characters} from "./DetailsList"
import CharacterModal from './CharacterModal';


const CharacterCards = () => {
    // const [ IsOpen, setIsOpen] = useState(false)


    // let handleClick = () => {
    //     setIsOpen(!IsOpen)
    // }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>

           <Row xs={1} md={4} className="g-3">
            {characters.map(character => (
            <Col key={character.id}>
                <Card id="character-cards" className="h-100">
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
            
        <BsPlusLg className="plus-circle" onClick={handleShow} />
        
      <CharacterModal show={show} close={handleClose}/>          
        </div> 
    )
}

export default CharacterCards
