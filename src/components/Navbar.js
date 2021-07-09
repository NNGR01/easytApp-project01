import maty_profile2 from '../assets/img/maty_profile2.jpeg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <h1><i className="far fa-calendar-check me-2" />EasytApp</h1>
            <div className="col-md-2">
                <form className="d-flex">
                    <input className="form-control" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-secondary mx-1" type="submit"><i className="fas fa-search" /></button>
                </form>
            </div>
            <div className="icon-notification col-md-6 d-flex align-items-center justify-content-end">
                <h5 className="float-end me-4">
                    <i className="fas fa-bell text-secondary" />
                    <i className="fas fa-envelope text-secondary mx-4" />
                </h5>
            </div>
            <div className="col-md-2 d-flex justify-content-center">
                <img src={maty_profile2} alt="no image" className="imgProfile" />
                <ul className="nav-item dropdown float-end">
                    <a className="nav-link dropdown-toggle text-secondary" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Matías Espinoza
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/Perfil"><i className="fas fa-user me-2"/>Perfil</a></li>
                        <li><a className="dropdown-item" href="/#"><i className="fas fa-cog me-2"/>Configuraciones</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/#"><i className="fas fa-sign-out-alt me-2"/>Log Out</a></li>
                    </ul>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;