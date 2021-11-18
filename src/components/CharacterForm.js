import React from 'react'
import { Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import { BsXLg, BsChevronDown } from 'react-icons/bs';

const CharacterForm = ({ cancel}) => {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {



    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


    return (
        <Form id="character-form" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control id="planet-image" size="lg" type="url" required/>
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
            <Form.Text className="">
            Paste the URL of a JPG or PNG of max 20 kb
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control id="planet-name" size="lg" type="text" required/>
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
        </Form.Group>

         <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control size="lg" as="textarea" rows={3} required/>
            <Form.Control.Feedback type="invalid">
            Bummer! We can’t create this planet right now. Probably a black hole in the way. Try later please.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" id="friend">
            <Form.Label>Friends</Form.Label>
            <div className="form-control d-flex justify-content-between  mb-3" type="text" >
                    <div className="d-flex friend  align-items-center gap-2">
                        <img className=" ms-1 " src={ require('../strapi-assets/characters/character-2.png').default}  alt="profile pic" />
                        <p className="mb-0  jane">Jane Cooper</p>
                        <p className="mb-1  ms-1 close">{<BsXLg/>}</p>
                    </div>
                    <p className="mb-0 down">{<BsChevronDown/>}</p>
                </div>
        </Form.Group>
        
        <div className="d-flex justify-content-end">
            <Button className="me-3" variant="primary" type="button" onClick={cancel} id="cancel-btn">
                Cancel
            </Button>

            <Button variant="primary" type="submit" id="submit-btn">
                Create Character
            </Button>
        </div>
        </Form>
    )
}

export default CharacterForm
