import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';


const PlanetForm = ({ cancel}) => {
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
        <Form id="planets-form" noValidate validated={validated} onSubmit={handleSubmit}>
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

        <div className="d-flex justify-content-end">
            <Button className="me-3" variant="primary" type="button" onClick={cancel} id="cancel-btn">
                Cancel
            </Button>

            <Button variant="primary" type="submit" id="submit-btn">
                Create Planet
            </Button>
        </div>
        </Form>
    )
}

export default PlanetForm
