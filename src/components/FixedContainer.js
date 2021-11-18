import React from 'react'
import { Container, Row,} from 'react-bootstrap';
import Home from './Home';
import { Navbar } from 'react-bootstrap';


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
