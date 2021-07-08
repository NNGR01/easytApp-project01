import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../css/home.css';



const Home = () => {
    return (
<div className="container">
    <Row className="top justify-content-md-center">
     
      <Col xl={5} className="mt-5">
      <Card className="card text-center">
      <Card.Header ><i class="fas fa-user-clock"></i> Cliente pendiente - Hoy</Card.Header>
  <Card.Body className="mt-5">
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Card.Text className="text-muted">Corte - Degradado</Card.Text> 
  </Card.Body>
  <Card.Footer><Button variant="light">Go somewhere</Button></Card.Footer>
</Card>
</Col>

<Col xl={2}></Col> 

 <Col xl={5} className="mt-5">
<Card className="card text-center">
  <Card.Header><i class="fas fa-user-clock"></i> Cliente pendiente - Hoy</Card.Header>
  <Card.Body className="mt-5">
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Card.Text className="text-muted">2 days ago</Card.Text> 
  </Card.Body>
  <Card.Footer><Button variant="light">Go somewhere</Button></Card.Footer>
</Card>
</Col>

</Row> 

<Row className="top">
<Col xl={5} className="mt-5">
<Card className="card text-center">
  <Card.Header >Featured</Card.Header>
  <Card.Body className="mt-5">
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text >
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Card.Text className="text-muted">2 days ago</Card.Text> 
  </Card.Body>
  <Card.Footer><Button variant="light">Go somewhere</Button></Card.Footer>
</Card>
</Col>

<Col xl={2}></Col>

<Col xl={5} className="mt-5">
   
<Card className="card text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body className="mt-5">
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Card.Text className="text-muted">2 days ago</Card.Text> 
  </Card.Body>
  <Card.Footer><Button variant="light">Go somewhere</Button></Card.Footer>
</Card>

</Col>
</Row>

</div> 
       
    )
}


export default Home;