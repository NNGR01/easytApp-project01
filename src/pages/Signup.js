import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import '../css/signup.css';
import { Context } from '../store/appContext';


const SignUp = props => {
    const { store, actions } = useContext(Context);

    const history = useHistory()

    return (
        <>
            <div className="box">
                <div className="logo">
                    <h1>Easyt-app</h1>
                </div>


                <div className="container">
                    <form  onSubmit={e => actions.register(e, props.history)} className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Nombre</label>
                            <input type="name" className="form-control" id="name" name="name"
                            value={store.name}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">E-mail</label>
                            <input type="text" className="form-control"  placeholder="Ingresa Email" id="email" name="email" aria-label="default input example"
                            value={store.email}
                            onChange={actions.handleChange}
                            
                            />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Contraseña</label>
                            <input className="form-control" type="password"  id="password" name="password" placeholder="Contraseña" 
                            value={store.password}
                            onChange={actions.handleChange}
                            
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="inputCity" className="form-label">Rut</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Servicio</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="inputZip" className="form-label">()</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Estoy de acuerdo
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" onClick={() => actions.register(history)} className="btn btn-primary">Sign in</button>
                        </div>
                    </form>





                </div>


            </div>

        </>
    )
}

export default SignUp;