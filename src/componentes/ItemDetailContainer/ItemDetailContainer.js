import { ItemDetail } from "./ItemDetail/ItemDetail";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


const productoInicial = [
    {name: "Tatuaje brazo", 
    categorias: "grandes", 
    id: 1, 
    price: 5000,
    stock: 7, 
    imag: "/imgs/tatuajeBrazo.jpg",
    detalles: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."},

    {name: "Tatuaje pierna", 
    categorias: "medianos", 
    id: 2, 
    price: 6000, 
    stock: 5, 
    imag: "/imgs/tatuajePierna.jpg",
    detalles: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."},

    {name: "Tatuaje espalda", 
    categorias: "pequeños", 
    id: 3, 
    price: 7000, 
    stock: 3, 
    imag: "/imgs/tatuajeEspalda.jpg",
    detalles: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."},
];


const promesa2 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(productoInicial)
},2000)
});

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        promesa2.then((producto) => {

            if (id) {setProducto(producto.find(x => x.id === id))
            };
            console.log(id);
        
        })
        .catch(() => {
            console.log("No funcionó");
        }).finally(() => {
            setLoading(false)
        })
    }, [id]);


    return(
        <>

            {loading ? <p>Cargando, es decir ESPERE POR FAVOR</p> : 
            <ItemDetail producto={producto}/>
            };
       
        </>
    );

};