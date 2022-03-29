import {useEffect, useState} from 'react';

const productosIniciales = [
    {name: "Tatuaje brazo", precio: 5000, stock: 7},
    {name: "Tatuaje pierna", precio: 6000, stock: 5},
    {name: "Tatuaje espalda", precio: 7000, stock: 3},
    {name: "Tatuaje pequeño", precio: 3000, stock: 10},
    
];


// USAR MAP PARA RENDERIZAR EL ARRAY "PRODUCTOS" (KEY, ID)
// DAR MENSAJE AL USUARIO MIENTRAS SE RENDERIZA EL ARRAY "PRODUCTOS"

const promesa1 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(productosIniciales)
},2000)

});

export const ItemListContainer = ({name}) => {

    const [productos, setProductos] = useState([]);


    useEffect(() => { 
        
        promesa1.then((productos) => {
        setProductos(productos);
        console.log(promesa1);
        })
        .catch(() => {
            console.log("No funcionó");
        })
    
    }, []);
    
    
    return (
        <>
            <h1> {name} </h1>

        </>
    );
};

// export default Desafios;