import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import "../css/login.css"
import { Context } from '../store/appContext'

const Login = props => {
    const { store, actions} = useContext(Context);
    
    return (
        <>
        {store.currentUser !== "" ? (
            <>

            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Easyt-App</h1>
                    </div>
            
                
                    <form onSubmit={e => actions.login(e, props.history)}>
                        <div className="control-group">
                            <input type="text" className="form-control" placeholder="Ingresa Email" id="email" name="email" aria-label="default input example"
                            value={store.email}
                            onChange={actions.handleChange}/>
                            <label className="login-field-icon fui-user" for="login-name"></label>
                        </div>

                        <div className="control-group">
                            <input className="form-control" type="password"  id="contrasena" name="contrasena" placeholder="Contraseña" 
                            value={store.contrasena}
                            onChange={actions.handleChange}

                            />
                            <label className="login-field-icon fui-lock" for="login-pass"></label>
                        </div>

                        <button className="btn btn-primary btn-large btn-block pl-5 boton" href="">Ingresar</button>
                        <Link className="login-link" type="submit" to="/signup">Registrarse</Link>

                      
                              
                        
                    </form>
                </div>
            </div>
            </>
        ) : null}

</>
)
}

{/* 
                    <Form className="login-form" onSubmit={e => actions.login(e, props.history)}>
                        <Form.Group controlId="formEmail" className="control-group">
                            <Form.Label className="login-field-icon fui-user" for="login-name"></Form.Label>
                            <Form.Control type="email" className="login-field" value={store.username} onChange={actions.handleChange} placeholder="Usuario" id="username" />
                        </Form.Group> */}
export default Login;