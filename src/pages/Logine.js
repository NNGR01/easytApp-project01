import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import { Container, Row,  Form, Button, Col, Card } from 'react-bootstrap';

 

const Login = props => {
  const { store, actions } = useContext(Context);

    return (
      <div className="Log">
        <header className="Log-top">
       <Container fluid >
         <Card className="mb-4 mt-4" style={{ color: "white"} }>
           <Card.Img className="mb-4" src="https://picsum.photos/200/100?grayscale" />
           <Card.Body style={{backgroundColor: "#282c34"}}>
             <Card.Title>
               Bienvendido a EasytApp
             </Card.Title>
             <Card.Text>
               Luchamos por agendar.
             </Card.Text>
           </Card.Body>
         </Card>
         <Form onSubmit={e => actions.login(e, props.history)}> 
           <Row>
             <Col md>
               <Form.Group controlId="formEmail">
                 <Form.Label>Ingresar Email</Form.Label>
                 <Form.Control type="email" value={store.username} onChange={actions.handleChange} id="username" name="username" placeholder="Ejemplo01@gmail.com"></Form.Control>
               </Form.Group>
             </Col>
             <Col md>
               <Form.Group controlId="formPassword">
                 <Form.Label>Contraseña</Form.Label>
                 <Form.Control id="password" name="password" value={store.password} onChange={actions.handleChange} type="password" placeholder="Password" />
               </Form.Group>
             </Col>
           </Row>
         <Button variant="secondary" type="submit">Login</Button>
         <Button variant="secondary" onClick={actions.logout} type="submit">Logout</Button>
        
         </Form>
       </Container>
       </header>
       </div>
    );
}

export default Login;

