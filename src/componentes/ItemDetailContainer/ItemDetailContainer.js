import { ItemDetail } from "./ItemDetail/ItemDetail";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase"


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const { id } = useParams();

    useEffect(() => {
        const productosCollection = collection(db, "productos");
        const refDoc = doc(productosCollection, id);
        getDoc(refDoc)
        .then((result)=>{
            const refProduct = {
                id, 
                ...result.data()
            }
            setProduct(refProduct);
        })
        .catch(()=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
          })
    }, [id]);

    return (
        
        <>
            <div className="container">
                { loading ?
                    <p>CARGANDO, ESPERE POR FAVOR</p>
                    : 
                    error ? 
                    <h1>Lo sentimos, hubo un error</h1>
                    :
                    <ItemDetail product={product} />
                }
            </div>
        </>
    );
};