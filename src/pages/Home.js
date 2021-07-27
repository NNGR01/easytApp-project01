import React, { Component, useContext } from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Badge from "react-bootstrap/Badge";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';



import "../css/home.css";
import { render } from "react-dom";
import { Context } from "../store/appContext";

const Home = () => {
  React.state = { fecha: new Date() };

  const { store } = useContext(Context)
 

const mostrar = () =>{

   swal({
      title: 'Nombre del Cliente',
      text: 'Tipo de servicio solicitado',
      buttons: ["si","no"]
   });
}

  // const onChange = fecha =>{
  //   React.setState({fecha : fecha});
  // }
  
  return (
    <div className="container">
      <div className="end">
        <DatePicker selected={React.state.fecha} />{" "}
        {/* onChange={React.setState.onChange}  */}
      </div>
        <div className="titulo h1">Agenda de Hoy </div>

      <Row className="top justify-content-md-center">
        <Col xl={5} className="mt-5">
          <Card className="card text-center">
            <Card.Header>
              <i class="fas fa-user-clock"></i> Cliente pendiente - Hoy
            </Card.Header>
            <Card.Body className="mt-1">
              <Card.Title>Magnus Carlsen</Card.Title>
              <Card.Text>
                Corte degrado nivel 2 + recorte de barba nivel 1
              </Card.Text>
              <Card.Text className="text-muted">Confirmada</Card.Text>
            </Card.Body>
            <Card.Footer>
              <button
                className="boton btn btn-outline-secondary mx-1"
                type="submit"
                onClick={mostrar}
              >
                Revisar cita
              </button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xl={2}></Col>

        <Col xl={5} className="mt-5">
          <Card className="card text-center">
            <Card.Header>
              <i class="fas fa-user-clock"></i>{store.currentUser.user.primerNombre } Cliente pendiente - Hoy
            </Card.Header>
            <Card.Body className="mt-1">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Card.Text className="text-muted">Por confirmar</Card.Text>
            </Card.Body>
            <Card.Footer>
            <button
                className="boton btn btn-outline-secondary mx-1"
                type="submit"
                onClick={mostrar}
              >
                Revisar cita
              </button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="top">
        <Col xl={5} className="mt-5">
          <Card className="card text-center">
            <Card.Header>
              <i class="fas fa-money-check-alt"></i> Ingreso actual de la semana
            </Card.Header>
            <Card.Body className="mt-1">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Card.Text className="text-muted">2 days ago</Card.Text>
            </Card.Body>
            <Card.Footer>
            <button
                className="boton btn btn-outline-secondary mx-1"
                type="submit"
                onClick={mostrar}
              >
             Mas info
              </button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xl={2}></Col>

        <Col xl={5} className="mt-5">
          <Card className="card text-center">
            <Card.Header>
              <i class="fas fa-crown"></i> Cliente de la semana{" "}
            </Card.Header>
            <Card.Body className="mt-1">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Card.Text className="text-muted">2 days ago</Card.Text>
            </Card.Body>
            <Card.Footer>
            <button
                className="boton btn btn-outline-secondary mx-1"
                type="submit"
                onClick={mostrar}
              >
               Mas info
              </button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
