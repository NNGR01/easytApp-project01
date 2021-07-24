const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Nicolas',
            lastname: 'Guzman',
            users: [
                { id: 1, name: 'A' },
                { id: 2, name: 'B' },
                { id: 3, name: 'C' },
                { id: 4, name: 'D' },
            ],
            username: '',
            email:'',
            password: '',
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

            fetch("https://5000-amaranth-gazelle-6njcuvph.ws-us11.gitpod.io/login", {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
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
                               /*  username: '',
                                password: '',
                                errors: null */
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
            }

        }
    }



export default getState;