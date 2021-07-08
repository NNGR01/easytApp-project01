import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
           <ul>
               <li>
                   <Link to="/" className="btn btn-primary w-100 rounded-pill"><i className="fas fa-home me-2"/>Inicio</Link>
               </li>
               <li>
                   <Link to="/Calendar" className="btn btn-primary w-100 rounded-pill"><i className="fas fa-calendar-alt me-2"/>Agenda</Link>
               </li>
               <li>
                   <Link to="/Sales" className="btn btn-primary w-100 rounded-pill"><i className="fas fa-chart-line me-2"/>Ingresos</Link>
               </li>
               <li>
                   <Link to="/Clients" className="btn btn-primary w-100 rounded-pill"><i className="fas fa-users me-2"/>Clientes</Link>
               </li>
               <hr className="mt-4"/>
               <li>
                   <Link to="/Networks" className="btn btn-secondary w-100 rounded-pill mt-3"><i className="fas fa-network-wired me-2"/>Mis Redes</Link>
               </li>
           </ul>
        </div> 
    )
}
export default Sidebar;