import { useState } from 'react';
import { Row, Col, Card} from "react-bootstrap";
import { BsPlusLg} from 'react-icons/bs'
import {characters} from "./DetailsList"
import CharacterModal from './CharacterModal';
import CharacterSidebar from './CharacterSidebar';
import { character } from '../strapi-assets/characters/character-img';

const CharacterCards = () => {
    const [info, setInfo] = useState("");

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [showSidebar, setShowSidebar] = useState(false);

    const handleCloseSidebar = () =>  {
        setShowSidebar(false);
        let cards = document.querySelector('.character-cards')
        cards.style.border = "none";

        let characterRow = document.querySelector('#character-row')
        characterRow.style.marginRight = "0px";
        characterRow.classList.add('row-cols-xl-4')
        characterRow.classList.add('row-cols-lg-3')
        characterRow.classList.add('row-cols-md-2')

        let dropdownBasic = document.querySelector('#dropdown-basic')
        dropdownBasic.style.marginRight = "0px";
    }
    const handleShowSidebar = (e) => {
        let cards = document.querySelector('.character-cards')
        cards.style.border = "2px solid #121c33";
        
        setShowSidebar(true);

        let characterRow = document.querySelector('#character-row')
        characterRow.style.marginRight = "300px";
        characterRow.classList.remove('row-cols-xl-4')
        characterRow.classList.remove('row-cols-lg-3')
        characterRow.classList.remove('row-cols-md-2')
        characterRow.classList.add('row-cols-xl-3')

        let dropdownBasic = document.querySelector('#dropdown-basic')
        dropdownBasic.style.marginRight = "300px";

       setInfo(e)
    }
   

    return (
        <div>

           <Row xs={1} md={2} lg={3} xl={4} className="g-3" id="character-row">
            {characters.map(character => (
            <Col  id="character-col">
                <Card key={character.id} id="character-cards" className="h-100 character-cards" onClick={() => handleShowSidebar(character)}>
                <Card.Body id="character-body">
                <Card.Img variant="top" src={character.image} />

                    <Card.Title className="ms-3" id="character-name">{character.name}</Card.Title>
                    <Card.Text className="ms-3">
                    {character.friends} friends
                    </Card.Text>
                </Card.Body>
                </Card>

            </Col>
            ))}

        </Row>
            
        <BsPlusLg className="plus-circle" onClick={handleShowModal} />
        
            
        <CharacterModal show={showModal} close={handleCloseModal}/>      
           
         <CharacterSidebar  show={showSidebar} close={handleCloseSidebar} title={info.name} desc={info.desc} />  
        </div> 
    )
}

export default CharacterCards
