import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Sidebar = () => {
  const { store } = useContext(Context);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/networks" className="btn btn-secondary w-100 rounded-pill mt-3">
            <i className="fas fa-network-wired me-2" />
            Mis Redes
          </Link>
        </li>
        {store.currentUser !== null ? (
            <>
<li>
  <Link to="/home" className="btn btn-primary w-100 rounded-pill">
    <i className="fas fa-home me-2" />
    Inicio
  </Link>
</li>
<li>
  <Link to="/Calendar" className="btn btn-primary w-100 rounded-pill">
    <i className="fas fa-calendar-alt me-2" />
    Agenda
  </Link>
</li>
<li>
  <Link to="/Sales" className="btn btn-primary w-100 rounded-pill">
    <i className="fas fa-chart-line me-2" />
    Ingresos
  </Link>
</li>
<li>
  <Link to="/Clients" className="btn btn-primary w-100 rounded-pill">
    <i className="fas fa-users me-2" />
    Clientes
  </Link>
</li>
<hr className="mt-4" />

            </>
            
        ) : null }
        <li>
          <Link
            to="/Login"
            className="btn btn-secondary w-100 rounded-pill mt-3"
          >
            <i className="fas fa-network-wired me-2" />
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
