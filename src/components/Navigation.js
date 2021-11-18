import React from 'react'
import { Nav, Navbar, Form } from 'react-bootstrap'
import {Link} from "react-router-dom"

const Navigation = (props) => {
  

    return (  
        <div id="navigation" className="d-flex justify-content-between" >  
        <Navbar>
        <Nav variant="pills"  className="pb-3" id="tabs">
            <Nav.Item className="planets">
                <Nav.Link as={Link} to="/" active={props.true}>PLANETS</Nav.Link>
            </Nav.Item>
            <Nav.Item className="characters" >
                <Nav.Link as={Link}  to="/characters" active={props.false}>CHARACTERS</Nav.Link>
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
