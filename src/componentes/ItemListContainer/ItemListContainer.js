import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';


// USAR MAP PARA RENDERIZAR EL ARRAY "PRODUCTOS" (KEY, ID)
// DAR MENSAJE AL USUARIO MIENTRAS SE RENDERIZA EL ARRAY "PRODUCTOS"


const productosIniciales = [
    {title: "Tatuaje brazo", categoria: "grandes", id: 1, price: 5000, stock: 7, imag: "imgs/tatuajeBrazo.jpg"},
    {title: "Tatuaje pierna", categoria: "medianos", id: 2, price: 6000, stock: 5, imag: "imgs/tatuajePierna.jpg"},
    {title: "Tatuaje espalda", categoria: "pequeños", id: 3, price: 7000, stock: 3, imag: "imgs/tatuajeEspalda.jpg"},
];

const promesa1 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(productosIniciales)
},3000)
});

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const {categoria} = useParams();
    console.log(categoria);


    useEffect(() => {
        setLoading(true)
        promesa1.then((productos) => {
        // ACA VA EL FILTER O FIND
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
            <h1> {greeting} </h1>

            {loading ? <p>Loading, es decir ESPERE POR FAVOR</p> : 
            <ItemList productos={productos}/> }
            
        </>
    );
};
