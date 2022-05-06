import { createContext, useState } from 'react';

export const contexto = createContext();  
const { Provider} = contexto;
console.log(contexto);

const CustomProvider = ({children}) => {

    const [usuarios, setUsuarios] = useState([{nombre: "Brian"},{nombre: "Emanuel"}]);

    const addUsuarios = (info) => {
        console.log("esta funcion añade usuarios");
    };

    const deleteUsuarios = (id) => {
        console.log("esta funcion borra usuarios");
    };

    const isInUsuarios = (id) => {
    };

    const getCantidadUsuarios = () => {
        console.log("esta funcion devuelve la cantidad de usuarios");
    };

    const clearLista = () => {
        setUsuarios([]);
    }


    return (
        <Provider value={{usuarios,addUsuarios,deleteUsuarios,getCantidadUsuarios,clearLista}}> {children} </Provider>
    );
};

export default CustomProvider;