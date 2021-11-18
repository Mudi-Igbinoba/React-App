import React from 'react';
import { BsXLg, BsPlusLg } from 'react-icons/bs';
import {characterImages} from '../strapi-assets/characters/character-img';
import { useState } from "react";
import { Offcanvas } from "react-bootstrap"


 function PlanetSidebar( {show, close}) {

    const [planetChars, setPlanetChars] = useState([
        { image: characterImages.character16, name: 'Darlene Robertson', id: 1 },
        { image: characterImages.character4, name: 'Kathryn Murphy', id: 2 },
        { image: characterImages.character3, name: 'Jenny Wilson', id: 3 },
        { image: characterImages.character5, name: 'Arlene McCoy', id: 4 },
        { image: characterImages.character11, name: 'Darell Steward', id: 5 },
        { image: characterImages.character6, name: 'Bessie Cooper', id: 6 }
      ]);

      console.log(planetChars);


    return(
        <Offcanvas show={show} onHide={close} placement="end" backdrop={false} scroll={true} id="planet-sidebar">
        <Offcanvas.Header  className="d-flex flex-column align-items-start">
        <BsXLg className="close-btn flex-column align-self-end" onClick={close}/>
          <Offcanvas.Title  className="d-flex justify-content-between">
            Planet Alpha
        </Offcanvas.Title>
          
        <p className="sidebar-subtitle">Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>

        <div className="sidebar-pop">Population</div>
        <div className="sidebar-no">234</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="d-flex mb-3 justify-content-between">
          <h5 className="sidebar-characters align-self-center mt-1">Characters</h5>
          <BsPlusLg className="close-btn"/>
        </div>

        <div className="chars ">
            {planetChars.map((e) => (
            <div key={e.id} className="d-flex mb-3 justify-content-start">
                <img src={e.image} alt="" />
                <div className="ms-3 mt-2 align-self-center">
                    <h6 className="sidebar-name">{e.name}</h6>
                    <p className="sidebar-friends">23 friends</p>
                </div>
            </div> 
            ))}

        </div>
        </Offcanvas.Body>
      </Offcanvas>

    )
 };

 export default PlanetSidebar