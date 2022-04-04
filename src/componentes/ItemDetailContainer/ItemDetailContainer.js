import { ItemDetail } from "./ItemDetail/ItemDetail";
import {useEffect, useState} from 'react';



const detalleInicial = 
    {title: "Tatuaje brazo PREMIUM", 
    id: 6, 
    price: 5500, 
    stock: 5, 
    imag: "imgs/tatuajeBrazo.jpg",
    detalles: "Este es nuestro trabajo mas solicitado, el mismo se puede realizar con distintos diseños y colores. Contactanos para reservar tu turno."};

const promesa2 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(detalleInicial)
},3000)
});


export const ItemDetailContainer = () => {

    const [detalle, setDetalles] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        promesa2.then((detalle) => {
        setDetalles(detalle);
        })
        .catch(() => {
            console.log("No funcionó");
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return(
        <>

            {loading ? <p>Cargando, es decir ESPERE POR FAVOR</p> : 
            <ItemDetail 
            key={detalle.id} 
            title={detalle.title}
            stock={detalle.stock}
            price={detalle.price}
            imag={detalle.imag}
            detalles={detalle.detalles}/>}
       
        </>
    );

};