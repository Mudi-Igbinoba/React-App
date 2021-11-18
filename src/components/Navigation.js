import React from 'react'
import { Nav, Navbar, Form } from 'react-bootstrap'


const Navigation = (props) => {
  

    return (  
        <div id="navigation" className="d-flex justify-content-between" >  
        <Navbar>
        <Nav variant="pills"  className="pb-3" id="tabs">
            <Nav.Item className="planets">
                <Nav.Link href="/" active={props.true}>PLANETS</Nav.Link>
            </Nav.Item>
            <Nav.Item className="characters" >
                <Nav.Link  href="/characters" active={props.false}>CHARACTERS</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>

        <Form.Select id="dropdown-basic" className={props.display}>
            <option>Planets: All</option>
            <option value="1">Alpha</option>
        </Form.Select>
       </div>
    )
}

export default Navigation
