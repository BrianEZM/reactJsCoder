import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList/ItemList';
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {name} = useParams();

    useEffect(() => {

        const productosCollection = collection(db, "productos");
        let q;
        if(name===undefined){
            q = query(productosCollection, orderBy("price"));
        } else{
            q = query(productosCollection, where("category", "==", name));
        }
        getDocs(q)
        .then((result)=>{
            const docs = result.docs;
            const lista = docs.map(producto => {
                const id = producto.id;
                const product = {
                    id,
                    ...producto.data()
                }
                return product;
            })
            setProducts(lista);
        })
        .catch(() => {
            console.log('Error')
        })
        .finally(()=>{
            setLoading(false);
          })
    }, [name]);

    return (
        <>
            <h1> {greeting} </h1>
            { loading ? <p>Loading, es decir ESPERE POR FAVOR</p> : 
            <ItemList products={products}/> }
        </>
    );
};
