const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            id:"",
            primerNombre: '',
            segundoNombre:'',
            apellidoPaterno : '',
            apellidoMaterno : '',
            users: '',
            email:'',
            fono:'',
            contrasena: '',
            currentUser: null,
            path: 'http://localhost:3000',
            error: ""
            



        },
        
        actions:{
            saludar: () => console.log(getStore().name + " " + getStore().lastname),

            getUsers: async () => {
                const resp = await fetch('https:jsonplaceholder.typicode.com/users')
                const data = await resp.json()
                setStore({ users: data});
            },
            handleChange: e =>{
                setStore({
                    [e.target.name]: e.target.value,
                    
                   
                })
            },
            login: (e, history) => {
                e.preventDefault();
                const store = getStore();

            fetch("http://127.0.0.1:5000/login", {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        contrasena: store.contrasena
                    }),
                    headers: {
                        'Content-Type': 'application/json' //estoy enviando en formato json
                    }
                })  
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.error || data.msg) {
                            setStore({
                                error: data.error
                            })
                        } else {
                            const aut= {
                                currentUser: data,
                           /*      primerNombre: '',
                                email:'',
                                constrasena: '',
                                errors: null  */
                            }
                            localStorage.setItem("auth", JSON.stringify(aut))
                            setStore({...aut})
                            history.push("/home");
                        }
                    })
            },
            logout: (history) => {
                setStore({
                  currentUser: null,
                  });
               localStorage.clear();   
                history.push("/login");
              },
            revalidate: user =>{
                // console.log(user, {...user}, "soy redirect")
                setStore({
                    ...user
                })
            },
            register: (e, history) =>{
                e.preventDefault();
                const store = getStore();
                console.log({
                    primerNombre : store.primerNombre,
                    segundoNombre:"",
                    apellidoPaterno: store.apellidoPaterno,
                    apellidoMaterno:"",
                    fono: store.fono,
                    email: store.email,
                    contrasena: store.contrasena
                })
            
                fetch("http://localhost:5000/usuarios", {
                    method: 'POST',
                    body: JSON.stringify({
                        primerNombre : store.primerNombre,
                        segundoNombre:"",
                        apellidoPaterno: store.apellidoPaterno,
                        apellidoMaterno:"",
                        fono: store.fono,
                        email: store.email,
                        contrasena: store.contrasena
                    }),
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                   .then(response => response.json())
                   .then(data => {
                    console.log(data)
                    if(data.error || data.msg){
                        setStore({
                            error: data.error
                        })
                    }else{
                        const reg = {
                            currentUser: data,
                           /*  primerNombre: store.primerNombre,
                            apellidoPaterno :store.apellidoPaterno,
                            email:store.email,
                            contrasena:store.constrasena,
 */
                        
                        }
                        localStorage.setItem("reg",JSON.stringify(reg))
                        setStore({ ...reg })
                        history.push("/login")

                    }
                   })

            }
            }

        }
    }



export default getState;