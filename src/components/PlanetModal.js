import React from 'react'
import {  Modal } from 'react-bootstrap'
import PlanetForm from './PlanetForm'
const PlanetModal = ({show, close}) => {
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
          <Modal.Title className="modal-title">Planet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <PlanetForm cancel={close}/>
        </Modal.Body>
        
      </Modal>
    )
}

export default PlanetModal
