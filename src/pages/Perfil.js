import React from 'react';
import { Link } from 'react-router-dom';

import '../css/perfil.css';

const Perfil = () => {
    return (
        <div className="carta">
          <div className="carta-img">
            <img src="https://wallpaperaccess.com/full/153.jpg"></img>
          </div>
          <div className="perfil-img">
            <img src="https://64.media.tumblr.com/fca81cd0ffc891a2c39da882c6f7d161/72b889ad881e1f1c-54/s1280x1920/e6c34c7a64d94b2211c69f5ff80155039d1e9ef7.jpg"></img>
          </div>
          <div className="carta-contenido">
            <h3>Jhon Sanchez</h3>
            <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
          </div>
   <div className="iconos h2">
     <Link to="#" className="fab fa-facebook-f"></Link>
     <Link to="#" className="fab fa-youtube"></Link>
     <Link to="#" className="fab fa-instagram"></Link>
     <Link to="#" className="fab fa-twitter"></Link>
     <Link to="#" className="fab fa-wathsup"></Link>

   </div>

        </div>
      );
}
 
export default Perfil;


/* "https://wallpaperaccess.com/full/100.jpg" */