import {useEffect, useState} from 'react';
import { ItemList } from '../ItemList/ItemList'

// USAR MAP PARA RENDERIZAR EL ARRAY "PRODUCTOS" (KEY, ID)
// DAR MENSAJE AL USUARIO MIENTRAS SE RENDERIZA EL ARRAY "PRODUCTOS"


const productosIniciales = [
    {title: "Tatuaje brazo", id: 1, price: 5000, stock: 7},
    {title: "Tatuaje pierna", id: 2, price: 6000, stock: 5},
    {title: "Tatuaje espalda", id: 3, price: 7000, stock: 3},
];

const promesa1 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(productosIniciales)
},3000)
});

export const ItemListContainer = ({name}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        promesa1.then((productos) => {
        setProductos(productos);
        })
        .catch(() => {
            console.log("No funcionó");
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return (
        <>
            {loading ? <p>Loading, es decir ESPERE POR FAVOR</p> : 
            <ItemList productos={productos}/> }
            <h1> {name} </h1>
        </>
    );
};

// {productos.map((producto) => {
//     return (
//         <div>
//             <h1>Hola la puta que me pario</h1>
//         </div>
//     )
// })}

// export default Desafios;