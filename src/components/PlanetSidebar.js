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
        <Offcanvas show={show} onHide={close} placement="end" backdrop={false} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Planet Alpha</Offcanvas.Title>
          
      <p>Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>

                <div>Population</div>
             <div>234</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
                   <h5>Characters</h5>
                   <BsPlusLg className="close-btn"/>
               </div>

               <div className="chars">
                   {planetChars.map((e) => (
                   <div key={e.id}>
                       <img src={e.image} alt="" />
                       <div>
                           <h6>{e.name}</h6>
                           <p>23 friends</p>
                       </div>
                   </div> 
                   ))}

               </div>
        </Offcanvas.Body>
      </Offcanvas>





        // <div id="sidebar">
        //      <div className="sidebar-header">
        //         <BsXLg className="close-btn"/>

        //         <h2>Planet Alpha</h2>
        //         <p>Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>

        //         <div>Population</div>
        //         <div>234</div>
        //      </div>

        //      <div className="sidebar-footer">
        //         <div>
        //             <h5>Characters</h5>
        //             <BsPlusLg className="close-btn"/>
        //         </div>

        //         <div className="chars">
        //             {planetChars.map((e) => (
        //             <div key={e.id}>
        //                 <img src={e.image} alt="" />
        //                 <div>
        //                     <h6>{e.name}</h6>
        //                     <p>23 friends</p>
        //                 </div>
        //             </div> 
        //             ))}

        //         </div>
        //     </div> 
        // </div>
    )
 };

 export default PlanetSidebar