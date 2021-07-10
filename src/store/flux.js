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
            ]

        },
        actions:{
            saludar: () => (alert(getStore().name + " " + getStore().lastname)),
            getUsers: async () => {
                const resp = await fetch('https:jsonplaceholder.typicode.com/users')
                const data = await resp.json()
                setStore({ users: data});
            }
        }
    }

}

export default getState;