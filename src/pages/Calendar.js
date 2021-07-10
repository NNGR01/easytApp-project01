import { useContext } from "react";
import { Context } from "../store/appContext";

const Calendar = () => {
    const {store, actions } = useContext(Context);

    return (
        <div>
            <h1>Calendario/Agenda</h1>
            <p>{`${store.name} ${store.lastname}`}</p>
            <button onClick={actions.saludar}>
Saludar
            </button>
        </div>

  
);
}
 
export default Calendar;