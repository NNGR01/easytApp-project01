import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";

import '../css/perfil.css';

const Perfil = () => {
    return (
        <div>
          <Jumbotron mb-3 fluid >
            <Container fluid>
              <h1 className="display-3">Mi cuenta</h1>
              
              <div className="row g-0">
    <div className="col-md-4">
      <img src={"https://www.geekmi.news/__export/1620498789729/sites/debate/img/2021/05/08/takemichi_crop1620498707631.jpg_1902800913.jpg"}  className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
 </Container>
 <div></div>
          </Jumbotron>
        </div>
      );
}
 
export default Perfil;