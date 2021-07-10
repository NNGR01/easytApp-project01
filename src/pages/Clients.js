import { useEffect, useState } from "react";

const Clients = () => {
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState("")

  useEffect(() => {
    console.log("Component Mounted");

    getUsers();
    getUsersAsync();

    return () => {
      console.log("Unmounted Component...");
    };
  }, []);

  useEffect(() => {
    console.log("Data cargada...");
  });

  const getUsers = () => {
    fetch("httpps://jsonholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("que tal");
  };

  const getUsersAsync = async () => {
    try {
      const response = await fetch("httpps://jsonholder.typicode.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Error al consultar la api");

      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };
  async function getPost() {}

  return (
    <div>
        <input type="text" onKeyPress= { (evento) => {
            if(evento.key ===  'Enter' && evento.target.value !== "") {
                setNames(names.concat(evento.target.value))
            }
        }} />
      <ul>
        <li>Listaza</li>
        {getUsers()}
      </ul>
    </div>
  );
};

export default Clients;
