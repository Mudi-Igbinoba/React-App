import React from 'react';
import { BsXLg, BsPlusLg } from 'react-icons/bs';
import {characterImages} from '../strapi-assets/characters/character-img';
import { useState } from "react";
import { Offcanvas } from "react-bootstrap"


 function CharacterSidebar( {show, close, title, desc}) {

    const [planetChars, setPlanetChars] = useState([
        { image: characterImages.character9, name: 'Eleanor Pena', id: 1 },
        { image: characterImages.character16, name: 'Brooklyn Simmons', id: 2 },
        { image: characterImages.character4, name: 'Kristin Watson', id: 3 },
        { image: characterImages.character12, name: 'Cody Fisher', id: 4 },
        { image: characterImages.character14, name: 'Courtney Henry', id: 5 },
        { image: characterImages.character5, name: 'Annette Black', id: 6 }
      ]);

      console.log(planetChars);


    return(
        <Offcanvas show={show} onHide={close} placement="end" backdrop={false} scroll={true} id="planet-sidebar">
        <Offcanvas.Header  className="d-flex flex-column align-items-start">
        <BsXLg className="close-btn flex-column align-self-end" onClick={close}/>
          <Offcanvas.Title id="sidebar-title"  className="d-flex justify-content-between">
            {title}
        </Offcanvas.Title>
          
        <p className="sidebar-subtitle">{desc}</p>

        <div className="d-flex flex-row w-100">
            <div>
                <div className="sidebar-pop">Planet</div>
                <div className="sidebar-no">Alpha</div>
            </div>

            <div className="sidebar-friends-div">
                <div className="sidebar-pop">Friends</div>
                <div className="sidebar-no">23</div>
            </div>
        </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
       
        <h5 className="sidebar-characters">Friends</h5>
        

        <div className="chars ">
            {planetChars.map((e) => (
            <div key={e.id} className="d-flex mb-3 justify-content-start">
                <img src={e.image} alt="" />
                <div className="ms-3 mt-2 align-self-center">
                    <h6 className="sidebar-name">{e.name}</h6>
                    <p className="sidebar-friends">Amet minim mollit non deserunt ullamco.</p>
                </div>
            </div> 
            ))}

        </div>
        </Offcanvas.Body>
      </Offcanvas>




    )
 };

 export default CharacterSidebar