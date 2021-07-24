import React from 'react';
import '../css/signup.css';


const SignUp = () => {
    return (
        <>
            <div className="box">
                <div className="logo">
                    <h1>Easyt-app</h1>
                </div>


                <div className="container">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Nombre</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Apellido</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">E-mail</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Contraseña</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="" />
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
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>





                </div>


            </div>

        </>
    )
}

export default SignUp;