import { ItemDetail } from "./ItemDetail/ItemDetail";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


const initialProduct = [
    {name: "Tatuaje brazo", 
    category: "grandes", 
    id: 1, 
    price: 5000,
    stock: 7, 
    imag: "/imgs/tatuajeBrazo.jpg",
    details: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."},

    {name: "Tatuaje pierna", 
    category: "medianos", 
    id: 2, 
    price: 6000, 
    stock: 5, 
    imag: "/imgs/tatuajePierna.jpg",
    details: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."},

    {name: "Tatuaje espalda", 
    category: "pequeños", 
    id: 3, 
    price: 7000, 
    stock: 3, 
    imag: "/imgs/tatuajeEspalda.jpg",
    details: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."},
];


const promesa2 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(initialProduct)
},2000)
});

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        promesa2.then((product) => {

            if (id) {setProduct(product.find(x => x.id === product.id.toString()))
            };
    
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
            <ItemDetail product={product}/>
            };
        </>
    );

};