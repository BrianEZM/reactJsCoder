import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList/ItemList';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"

console.log(db);



const initialProducts = [
    {name: "Tatuaje brazo", 
    category: "grandes", 
    id: 1, 
    price: 5000,
    stock: 7, 
    imag: "/imgs/tatuajeBrazo.jpg"},

    {name: "Tatuaje pierna", 
    category: "medianos", 
    id: 2, 
    price: 6000, 
    stock: 5, 
    imag: "/imgs/tatuajePierna.jpg"},

    {name: "Tatuaje espalda", 
    category: "pequeños", 
    id: 3, 
    price: 7000, 
    stock: 3, 
    imag: "/imgs/tatuajeEspalda.jpg"},
];

const promesa1 = new Promise ((res, rej) => {
    setTimeout(() => {
    res(initialProducts)
},2000)
});

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const {name} = useParams();

    useEffect(() => {
        setLoading(true)

        promesa1.then((products) => {

        if(name){
            setProducts(products.filter(producto => producto.category === name))
        }else{ setProducts(products);}

        })
        .catch(() => {
            console.log("No funcionó");
        }).finally(() => {
            setLoading(false)
        })
    }, [name]);

    return (
        <>
            <h1> {greeting} </h1>

            {loading ? <p>Loading, es decir ESPERE POR FAVOR</p> : 
            <ItemList products={products}/> }
        </>
    );
};
