import React from 'react'
import { Container, Row, Navbar} from 'react-bootstrap';
import Home from "./Home.js"

const FixedContainer = () => {
    
    return (
    <Container className="p-5">
        <Row>
        <Navbar expand="lg" variant="light" className="flex-column align-items-start ">
            <Navbar.Brand href="#" className='pb-1'>Spacious</Navbar.Brand>
        </Navbar>
        <Home />
        </Row>
    </Container>
    )
}

export default FixedContainer
