import {  Modal } from 'react-bootstrap'
import CharacterForm from './CharacterForm'

const CharacterModal = ({show, close}) => {
    return (
        <Modal
        size="lg"
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
        id="planet-modal"
      >
                
        <Modal.Header closeButton />
        <Modal.Header>
          <Modal.Title className="modal-title">Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CharacterForm cancel={close}/>
        </Modal.Body>
        
      </Modal>
    )
}

export default CharacterModal