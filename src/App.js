import { BrowserRouter, Route } from "react-router-dom";
import "./css/style.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Sales from "./pages/Sales";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Calendar from "./pages/Calendar";
import Networks from "./pages/Signup";
import Perfil from "./pages/Perfil";
import injectContext, { Context } from "./store/appContext";
import Login from "./pages/Login";
import MasterRoute from "./layouts/masterly";
import Registro2 from "./pages/Networks";
import SignUp from "./pages/Signup";


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <switch>
          <MasterRoute component={Navbar} />

          <div className="flex">
            <MasterRoute component={Sidebar} />
            <div className="content">
              <MasterRoute path="/home" exact={true} component={Home} />
              <MasterRoute path="/calendar" exact={true} component={Calendar} />
              <MasterRoute path="/sales" exact={true} component={Sales} />
              <MasterRoute path="/clients" exact={true} component={Clients} />
              <MasterRoute path="/perfil" exact={true} component={Perfil} />
              <MasterRoute path="/networks" exact={true} component={Networks} />
              <Route path="/signup" exact={true} component={SignUp} />

              <Route path="/" exact={true} component={Login} />
            </div>
          </div>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
